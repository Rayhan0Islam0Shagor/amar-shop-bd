import React, { useState } from "react";
import { Link } from "react-router-dom";

// import icons
import { GoSearch } from "react-icons/go";
import { RiShoppingCart2Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { MdMenu, MdClose } from "react-icons/md";

// import styles
import { Container } from "react-bootstrap";
import styles from "./Navbar.module.scss";

// import components
import Sidebar from "./Sidebar/Sidebar";

// load pages by on hover (Eager Loading)
const home = () => import("../../../routes/Home");
const cart = () => import("../../../routes/Cart");

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <nav className={`${styles.navbar} d-flex align-items-center`}>
        <Container>
          <div className={styles.nav}>
            <div className={styles.logo}>
              <Link to="/" onMouseOver={() => home()}>
                <h2>AMAR SHOP</h2>
              </Link>
            </div>

            <div className={styles.searchBar}>
              <GoSearch className={styles.search_icon} />
              <input
                type="text"
                className={styles.input}
                placeholder="Search"
              />
            </div>

            <div className={styles.icons}>
              <p>
                <Link
                  to="/cart"
                  onMouseOver={() => cart()}
                  className={styles.cartQuantity}
                >
                  <RiShoppingCart2Line className={styles.cartQuantityIcon} />
                  cart <span>0</span>
                </Link>
              </p>
              <AiOutlineUser className={styles.icon} />
            </div>

            <div
              className={styles.hamburger}
              onClick={() => setSidebar(!sidebar)}
            >
              {sidebar ? (
                <MdClose className={styles.icon} />
              ) : (
                <MdMenu className={styles.icon} />
              )}
            </div>
          </div>
        </Container>
      </nav>

      <div className={sidebar ? styles.show : styles.hide}>
        {sidebar && <Sidebar />}
      </div>
    </>
  );
};

export default Navbar;
