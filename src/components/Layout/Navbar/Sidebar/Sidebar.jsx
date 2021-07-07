import React from "react";

import { GoSearch } from "react-icons/go";

import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.searchBar}>
        <GoSearch className={styles.search_icon} />
        <input type="text" className={styles.input} placeholder="Search" />
      </div>
    </div>
  );
};

export default Sidebar;
