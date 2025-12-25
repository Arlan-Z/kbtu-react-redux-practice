import type Post from "../models/post";

type ItemsListProps = {
  posts: Post[];
};

export default function ItemsList({ posts }: ItemsListProps) {
  if (posts.length === 0) {
    return <p>No posts yet.</p>;
  }

  return (
    <ul className="items-list">
      {posts.map((post) => (
        <li key={post.id} className="items-list__item">
          <h3 className="items-list__title">{post.title}</h3>
          <p className="items-list__body">{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
