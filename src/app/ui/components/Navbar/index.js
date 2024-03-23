"use client";

import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Menu from "./Menu";
import styles from "./Navbar.module.css";
import { useState } from "react";

const NavBar = () => {
  const [displayMenu, setDisplayMenu] = useState(true);

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav}>
        <Logo />
        <Hamburger handleClick={() => setDisplayMenu(!displayMenu)} />
        <div className={`${styles.menuWrapper} ${displayMenu ? "block" : "hidden"}`} >
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
