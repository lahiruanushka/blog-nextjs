import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {
  const posts = await getData();
  console.log(posts);
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};

export default BlogPage;
