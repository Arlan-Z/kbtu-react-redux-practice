import { useEffect } from "react";
import ItemsList from "../components/ItemsList";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchPosts } from "../store/postsSlice";

export default function PostsPage() {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((state) => state.posts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  const isLoading = status === "loading";

  return (
    <section className="posts-page">
      <h1>All Posts</h1>
      {isLoading && <p>Loading posts...</p>}
      {!isLoading && error && <p className="posts-page__error">{error}</p>}
      {!isLoading && !error && <ItemsList posts={items} />}
    </section>
  );
}
