import {
  Children,
  cloneElement,
  isValidElement,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { getPostBySlug } from "../lib/posts";
import styles from "./BlogDetail.module.css";

// 코드·프롬프트 박스: 폰에서도 한 번에 복사할 수 있게 복사 버튼을 붙인다
function CodeBlock({ children }: { children?: ReactNode }) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText((preRef.current?.textContent ?? "").trimEnd());
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // 클립보드를 쓸 수 없는 환경에서는 직접 선택해서 복사한다
    }
  };

  return (
    <div className={styles.codeBlock}>
      <button type="button" className={styles.copy} onClick={copy}>
        {copied ? "복사됨" : "복사"}
      </button>
      <pre ref={preRef}>{children}</pre>
    </div>
  );
}

// 인용문이 "> [!NOTE]"로 시작하면 옅은 보라색 강조 박스로 보여준다
function Quote({ children }: { children?: ReactNode }) {
  const items = Children.toArray(children);
  const first = items.find((item) => isValidElement(item)) as
    | ReactElement<{ children?: ReactNode }>
    | undefined;
  const inner = first ? Children.toArray(first.props.children) : [];
  const lead = inner[0];

  if (first && typeof lead === "string" && lead.startsWith("[!NOTE]")) {
    const rest = [lead.replace(/^\[!NOTE\]\s*/, ""), ...inner.slice(1)];
    return (
      <aside className={styles.callout}>
        {items.map((item) => (item === first ? cloneElement(first, {}, ...rest) : item))}
      </aside>
    );
  }

  return <blockquote>{children}</blockquote>;
}

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className={styles.notFound}>
        <p className={styles.notFoundCode}>404 Not Found</p>
        <p>글을 찾을 수 없습니다.</p>
        <Link to="/blog" className={styles.back}>
          ← 아티클 목록으로
        </Link>
      </div>
    );
  }

  return (
    <article className={styles.article}>
      <Link to="/blog" className={styles.back}>
        ← /articles
      </Link>

      <header className={styles.header}>
        {post.series.length > 0 && (
          <p className={styles.series}>
            {post.series.map((name) => (
              <span key={name} className={styles.seriesItem}>
                {name}
              </span>
            ))}
          </p>
        )}
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.meta}>
          <time dateTime={post.date}>{post.date.replaceAll("-", ".")}</time>
        </p>
      </header>

      <div className={styles.body}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
            blockquote: ({ children }) => <Quote>{children}</Quote>,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      <footer className={styles.end}>
        <span className={styles.endCode}>EOF</span>
        <Link to="/blog" className={styles.back}>
          다른 아티클 보기 →
        </Link>
      </footer>
    </article>
  );
}
