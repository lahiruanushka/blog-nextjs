import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      {/* Dummy image data */}
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/27163466/pexels-photo-27163466/free-photo-of-woman-reading-a-book-in-shadow.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt="Post Image"
          fill
          className={styles.img}
        />
      </div>

      <div className={styles.textContainer}>
        {/* Dummy title */}
        <h1 className={styles.title}>Sample Post Title</h1>

        <div className={styles.detail}>
          <div className={styles.authorImageContainer}>
            <Image
              src="https://images.pexels.com/photos/27163466/pexels-photo-27163466/free-photo-of-woman-reading-a-book-in-shadow.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              alt="Post Image"
              height={50}
              width={50}
              className={styles.authorImage}
            />
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Jhon Snow</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {/* Dummy date */}
              {new Date().toString().slice(4, 16)}
            </span>
          </div>
        </div>

        {/* Dummy content description */}
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
          amet accumsan arcu. Sed vulputate consequat leo, ac elementum odio
          gravida at. Phasellus euismod, neque vitae feugiat convallis, massa
          neque tincidunt libero, eget convallis nisi elit ut magna.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
