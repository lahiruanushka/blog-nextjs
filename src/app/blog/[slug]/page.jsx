import Image from "next/image";
import styles from "./singlePost.module.css";
import PostAuthor from "@/components/postAuthor/postAuthor";
import { Suspense } from "react";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/27163466/pexels-photo-27163466/free-photo-of-woman-reading-a-book-in-shadow.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt="Post Image"
          fill
          className={styles.img}
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>

        <div className={styles.detail}>
          <Suspense fallback={<div>Loading..</div>}>
            <PostAuthor userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {new Date().toString().slice(4, 16)}
            </span>
          </div>
        </div>

        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
