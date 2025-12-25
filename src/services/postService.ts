import type Post from "../models/post";
import api from "../api";

const postService = {
  getPosts: async function(): Promise<Post[]> {
    const response = await api.get<Post[]>("/posts");
    return response.data;
  },

  getPostById: async function(postId: string): Promise<Post> {
    const response = await api.get<Post>(`/posts/${postId}`);
    return response.data;
  },
};

export default postService;
