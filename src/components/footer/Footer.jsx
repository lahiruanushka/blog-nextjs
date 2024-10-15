import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>NextJs Blog</div>
      <div className={styles.text}>
        NextJs Blog {new Date().getFullYear()} © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
