export type Post = {
  id: number;
  title: string;
  content: string;
  date: string;
};

export function getPosts(): Post[] {
  const saved = localStorage.getItem("posts");
  return saved ? JSON.parse(saved) : [];
}

export function savePosts(posts: Post[]) {
  localStorage.setItem("posts", JSON.stringify(posts));
}