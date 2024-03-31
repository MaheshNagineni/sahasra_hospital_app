import dynamic from "next/dynamic";
import styles from "./page.module.css";
import { Skeleton } from "@mui/material";

const CarouselSection = dynamic(() => import("./ui/components/Carousel"), {
  ssr: false,
  loading: () => <Skeleton variant="rounded" width="100%" height={540} />,
});

const HostpitalIntro = dynamic(() => import("./ui/components/HospitalIntro"), {
  ssr: false,
  loading: () => <Skeleton variant="rounded" width="100%" height={540} />,
});

const BookAppointment = dynamic(
  () => import("./ui/components/BookAppointment"),
  {
    ssr: false,
    loading: () => <Skeleton variant="rounded" width="100%" height={540} />,
  }
);

const Gallery = dynamic(() => import("./ui/components/Gallery"), {
  ssr: false,
  loading: () => <Skeleton variant="rounded" width="100%" height={720} />,
});

const Footer = dynamic(() => import("./ui/components/Footer"), {
  ssr: false,
  loading: () => <Skeleton variant="rounded" width="100%" height={340} />,
});

export default function Home() {
  return (
    <main className={styles.main}>
      <CarouselSection />
      <HostpitalIntro />
      <BookAppointment />
      <Gallery />
      <Footer />
    </main>
  );
}
