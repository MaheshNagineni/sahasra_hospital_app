import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="#home" className={styles.logo}>
      <Image alt="Sahasra Hospitals" src={"/images/logo.png"} width="220" height="80" />
    </Link>
  );
};

export default Logo;
