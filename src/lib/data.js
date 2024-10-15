import { getModels } from "./models";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    const { Post } = await getModels();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
};

export const getPost = async (slug) => {
  try {
    noStore();
    const { Post } = await getModels();
    const post = await Post.findOne({ slug });
    if (!post) {
      throw new Error("Post not found");
    }
    return post;
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    throw new Error("Failed to fetch post");
  }
};

export const getUser = async (id) => {
  try {
    noStore();
    const { User } = await getModels();
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw new Error("Failed to fetch user");
  }
};

export const getUsers = async () => {
  try {
    const { User } = await getModels();
    const users = await User.find();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
};
