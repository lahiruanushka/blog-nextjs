import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/27163466/pexels-photo-27163466/free-photo-of-woman-reading-a-book-in-shadow.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            fill
            className={styles.img}
          />
        </div>

        <span className={styles.date}>2024.02.04</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          similique sint libero ipsa laborum odit neque, officiis illo
          aspernatur vero harum est ullam tempora optio unde! Commodi
          praesentium suscipit deserunt!
        </p>
        <Link className={styles.link} href="/blog/slug">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
