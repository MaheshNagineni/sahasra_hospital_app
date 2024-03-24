import styles from "./page.module.css";
import CarouselSection from "./ui/components/Carousel";
import Footer from "./ui/components/Footer";
import Gallery from "./ui/components/Gallery";
import HostpitalInto from "./ui/components/HospitalIntro";

export default function Home() {
  return (
    <main className={styles.main}>
      <CarouselSection />
      <HostpitalInto />
      <Gallery />
      <Footer />
    </main>
  );
}
