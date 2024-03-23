import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Menu = () => {
  const [activeLink, setActiveLink] = useState("/#home");


  return (
    <div className={styles.menu}>
      {navLinks.map((link, index) => {
        return (
          <div className={styles.menuItem} key={index}>
            <Link
              className={`${styles.menuLink} ${link.url === activeLink ? styles.active: ""}`}
              href={link.url}
              onClick={() => setActiveLink(link.url)}
            >
              {link.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const navLinks = [
  { name: "Home", url: "/#home" },
  { name: "Hospital & Doctors", url: "/#hospital" },
  { name: "Book Appoinment", url: "/#appoinment" },
  { name: "Gallery", url: "/#gallery" },
  { name: "Contacts", url: "/#contacts" },
  { name: "About", url: "/#about" },
];

export default Menu;
