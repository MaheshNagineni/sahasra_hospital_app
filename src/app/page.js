import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Examplenav from "@/components/Examplenav";
import Gallery from "@/components/Gallery";

export default function Home() {
  return <main className={styles.main}>
    {/* <NavBar /> */}
    <Examplenav />
    <Carousel />
    <Gallery />
  </main>;
}
