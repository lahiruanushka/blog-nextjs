import React from "react";
import styles from "./postAuthor.module.css";
import Image from "next/image";

const getData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const PostAuthor = async ({ userId }) => {
  const user = await getData(userId);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className={styles.authorImageContainer}>
        <Image
          src="https://images.pexels.com/photos/27163466/pexels-photo-27163466/free-photo-of-woman-reading-a-book-in-shadow.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt="Author Image"
          height={60}
          width={60}
          className={styles.authorImage}
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
