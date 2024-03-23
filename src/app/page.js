import styles from "./page.module.css";
import CarouselSection from "./ui/components/Carousel";

export default function Home() {
  return (
    <main className={styles.main}>
      <CarouselSection />
    </main>
  );
}
