"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './Examplenav.module.css';
import { Button } from '@mui/material';

const Examplenav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div>
        <a href="/">
          <img src="https://res.cloudinary.com/dppobh7kx/image/upload/v1710936645/jpl8eghynwlxzehcr8n6.png" alt="logo" className={styles.logo} />
        </a>
      </div>
      <Button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </Button>
      <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const navLinks = [
  { name: 'Home', url: '/' },
  { name: 'Hospital & Doctors', url: '/hospital' },
  { name: 'Book Appointment', url: '/appointment' },
  { name: 'Gallery', url: '/gallery' },
  { name: 'Contacts', url: '/contacts' },
  { name: 'About', url: '/about' },
];

export default Examplenav;
