"use client";

import { useWindowSize } from "@/app/lib/useWindowSize";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Menu from "./Menu";
import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";

const NavBar = () => {
  const { width } = useWindowSize();

  const [displayMenu, setDisplayMenu] = useState(false);

  useEffect(() => {
    if (width >= 786 && displayMenu === false) setDisplayMenu(true);

    return () => {};
  });

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav}>
        <Logo />
        <Hamburger handleClick={() => setDisplayMenu(!displayMenu)} />
        <div
          className={`${styles.menuWrapper} ${
            displayMenu ? "block" : "hidden"
          }`}
        >
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
