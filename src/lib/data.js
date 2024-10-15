import { Post, User } from "./models";
import { connectToDb } from "./utls";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    await connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    await connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  noStore();
  
  try {
    await connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    await connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch users!");
  }
};
