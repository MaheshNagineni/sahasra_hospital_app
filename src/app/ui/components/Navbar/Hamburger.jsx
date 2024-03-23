"use client";

import React from "react";
import styles from "./Navbar.module.css";

const Hamburger = (props) => {
  const { handleClick } = props;
  return (
    <button type="button" className={styles.ham} onClick={handleClick}>
      <span className="sr-only">Menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  );
};

export default Hamburger;
