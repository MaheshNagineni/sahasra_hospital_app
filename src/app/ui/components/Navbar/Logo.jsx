import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={process.env.NEXT_PUBLIC_BASE_URL} className={styles.logo}>
      <Image alt="Sahasra Hospitals" src={"/next.svg"} width="80" height="30" />
    </Link>
  );
};

export default Logo;
