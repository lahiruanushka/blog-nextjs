import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
import { formatDate } from "@/lib/utls";
import PostAuthor from "../postAuthor/PostAuthor";

const PostCard = ({ post }) => {
  console.log("post", post);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src={post.img ? post.img : "/default-post.jpg"} alt="" fill className={styles.img} />
        </div>

        <span className={styles.date}>{formatDate(post.createdAt)}</span>
      </div>
      <PostAuthor userId={post.userId} />
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.description}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
