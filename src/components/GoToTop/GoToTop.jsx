import React, { useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import styles from "./GoToTop.module.scss";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <section>
          <div onClick={() => scrollToTop()}>
            <div className={styles.go_to_top}>
              <RiArrowUpSLine className={styles.icon} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default GoToTop;
