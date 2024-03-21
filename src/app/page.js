import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Examplenav from "@/components/Examplenav";

export default function Home() {
  return <main className={styles.main}>
    {/* <NavBar /> */}
    <Examplenav />
    <Carousel />
  </main>;
}
