import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Skeleton } from "@mui/material";
config.autoAddCss = false;

const NavBar = dynamic(() => import("./ui/components/Navbar"), {
  ssr: false,
  loading: () => <Skeleton variant="rounded" width="100%" height={90} />,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sahasra Hospitals",
  description: "Sahasra Hospitals description.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
