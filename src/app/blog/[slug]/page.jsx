import Image from "next/image";
import styles from "./singlePost.module.css";
import PostAuthor from "@/components/postAuthor/postAuthor";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import { formatDate } from "@/lib/utls";

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post.img && (
        <>
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="" fill className={styles.img} />
          </div>
        </>
      )}

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>

        <div className={styles.detail}>
          <Suspense fallback={<div>Loading..</div>}>
            {/* <PostAuthor userId={post.userId} /> */}
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published On </span>
            <span className={styles.detailValue}>
              {formatDate(post.createdAt)}
            </span>
          </div>
        </div>

        <div className={styles.content}>{post.description}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
