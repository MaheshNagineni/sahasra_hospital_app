"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { Button } from "@mui/material";

const NavBar = () => {
  const [displayMenu, setDisplayMenu] = useState(true);

  return (
    <nav className={styles.navbar}>
      <div>
      <a href="/">
            <img src="https://res.cloudinary.com/dppobh7kx/image/upload/v1710936645/jpl8eghynwlxzehcr8n6.png" alt="logo" className={styles.logo} />
          </a>
      </div>
      {/* Nav Menu */}
      <ul
        className={`${styles.menu} ${!displayMenu ? styles.displayNone : ""}`}
      >
        {navLinks.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.url}>{link.name}</Link>
            </li>
          );
        })}
      </ul>

      {/* Ham Buttom */}
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          setDisplayMenu(!displayMenu);
        }}
        style={{ display: "none" }}
      >
        ☰
      </Button>
    </nav>
  );
};

const navLinks = [
  { name: "Home", url: "/" },
  { name: "Hospital & Doctors", url: "/hospital" },
  { name: "Book Appoinment", url: "/appoinment" },
  { name: "Gallery", url: "/gallery" },
  { name: "Contacts", url: "/contacts" },
  { name: "About", url: "/about" },
];

export default NavBar;
