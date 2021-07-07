import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <main className={styles.footer}>
      <small>alright reserved &copy; amarshop | {year}</small>
    </main>
  );
};

export default Footer;
