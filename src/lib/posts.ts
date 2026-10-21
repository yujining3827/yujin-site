export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
};

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
    return { slug, title: slug, date: "", description: excerpt(content), tags: [], content };
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
    tags: (fields.tags ?? "")
      .replace(/^\[|\]$/g, "")
      .split(",")
      .map((tag) => tag.trim().replace(/^["']|["']$/g, ""))
      .filter(Boolean),
    content,
  };
}

const allPosts: Post[] = Object.entries(rawFiles)
  .map(([path, raw]) => parsePost(path, raw))
  .sort((a, b) => b.date.localeCompare(a.date));

export function getAllPosts(): Post[] {
  return allPosts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((post) => post.slug === slug);
}
