import dynamic from "next/dynamic";
import styles from "./page.module.css";
import { Skeleton } from "@mui/material";

export function generateMetadata() {
  return {
    title: "Sahasra Hospitals",
    description:
      "Sahasra Heart And Mind Care is a renowned Interventional Cardiology Clinic located in Nellore Z.P, Nellore. Our clinic is committed to providing comprehensive and compassionate care to patients suffering from heart and mental health issues. Led by Dr. Sujitha Gurram, an experienced addiction psychiatrist, our team strives to offer personalized treatment plans tailored to each patient's needs. With a focus on excellence and innovation, we aim to deliver top-quality healthcare services in a supportive and caring environment",
    url: process.env?.NEXT_PUBLIC_BASE_URL,
    sitename: "Sahasra Hospitals",
    openGraph: {
      title: "Sahasra Hospitals",
      description:
        "Sahasra Heart And Mind Care is a renowned Interventional Cardiology Clinic located in Nellore Z.P, Nellore. Our clinic is committed to providing comprehensive and compassionate care to patients suffering from heart and mental health issues. Led by Dr. Sujitha Gurram, an experienced addiction psychiatrist, our team strives to offer personalized treatment plans tailored to each patient's needs. With a focus on excellence and innovation, we aim to deliver top-quality healthcare services in a supportive and caring environment",
      url: process.env?.NEXT_PUBLIC_BASE_URL,
      sitename: "Sahasra Hospitals",
      images: [
        {
          url: `${process.env?.NEXT_PUBLIC_BASE_URL}/images/potrait/sahasra-contact-card.jpeg`,
          width: 342,
          height: 513,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Sahasra Hospitals",
      description:
        "Sahasra Heart And Mind Care is a renowned Interventional Cardiology Clinic located in Nellore Z.P, Nellore. Our clinic is committed to providing comprehensive and compassionate care to patients suffering from heart and mental health issues. Led by Dr. Sujitha Gurram, an experienced addiction psychiatrist, our team strives to offer personalized treatment plans tailored to each patient's needs. With a focus on excellence and innovation, we aim to deliver top-quality healthcare services in a supportive and caring environment",
      images: [
        `${process.env?.NEXT_PUBLIC_BASE_URL}/images/potrait/sahasra-contact-card.jpeg`,
      ],
    },
  };
}

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
