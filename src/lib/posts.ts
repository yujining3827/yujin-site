export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  /** 글이 속한 시리즈. 여러 개 지정할 수 있다 (SERIES 참고) */
  series: string[];
  /** true면 작성 중인 글. 로컬 개발 서버에서만 보이고 배포본에서는 빠진다 */
  draft: boolean;
  content: string;
};

/** 시리즈 이름 목록. 글 frontmatter의 series에 이 중에서 골라 적는다 */
export const SERIES = ["릴스정보", "바이브 코딩", "기술공부", "프로젝트"] as const;

// frontmatter의 "[a, b, c]" 형태 값을 배열로 바꾼다
function parseList(value: string | undefined): string[] {
  return (value ?? "")
    .replace(/^\[|\]$/g, "")
    .split(",")
    .map((item) => item.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

function excerpt(content: string): string {
  const paragraph = content
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .find((block) => block && !/^(#|```|>|-|\*|\d+\.|!\[)/.test(block));
  if (!paragraph) return "";
  const plain = paragraph
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[`*_]/g, "")
    .replace(/\s+/g, " ");
  return plain.length > 120 ? `${plain.slice(0, 120)}…` : plain;
}

const rawFiles = import.meta.glob("/src/content/posts/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function parsePost(path: string, raw: string): Post {
  const slug = path.split("/").pop()!.replace(/\.md$/, "");

  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    const content = raw.trim();
    return { slug, title: slug, date: "", description: excerpt(content), tags: [], series: [], draft: false, content };
  }

  const [, frontmatter, body] = match;
  const fields: Record<string, string> = {};
  for (const line of frontmatter.split("\n")) {
    const fieldMatch = line.match(/^(\w+):\s*(.*)$/);
    if (fieldMatch) {
      fields[fieldMatch[1]] = fieldMatch[2].trim().replace(/^["']|["']$/g, "");
    }
  }

  const content = body.trim();
  return {
    slug,
    title: fields.title ?? slug,
    date: fields.date ?? "",
    description: fields.description ?? excerpt(content),
    tags: parseList(fields.tags),
    series: parseList(fields.series),
    draft: fields.draft === "true",
    content,
  };
}

const allPosts: Post[] = Object.entries(rawFiles)
  .map(([path, raw]) => parsePost(path, raw))
  .filter((post) => import.meta.env.DEV || !post.draft)
  .sort((a, b) => b.date.localeCompare(a.date));

export function getAllPosts(): Post[] {
  return allPosts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((post) => post.slug === slug);
}
