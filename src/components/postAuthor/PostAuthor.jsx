import React from "react";
import styles from "./postAuthor.module.css";
import Image from "next/image";
import { getUser } from "@/lib/data";

const PostAuthor = async ({ userId }) => {
 
  const user = await getUser(userId);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className={styles.authorImageContainer}>
        <Image
          src={user.img ? user.img : "/noavatar.png"}
          height={60}
          width={60}
          className={styles.authorImage}
          alt={user.username}
        />
      </div>
      <div className={styles.detailText}>
        <span className={styles.detailTitle}>Author</span>
        <span className={styles.detailValue}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostAuthor;
