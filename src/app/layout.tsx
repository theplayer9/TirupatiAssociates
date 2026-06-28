import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Tirupati Associates — Premium Door Hinge Manufacturer | Aligarh, India",
  description:
    "Leading door hinge manufacturer from Aligarh, India. Supplying premium quality hinges to UAE, South Africa, Vietnam and 40+ global markets. ISO 9001 certified.",
  keywords:
    "door hinge manufacturer India, Aligarh hinge exporter, heavy duty hinges UAE, door hinges South Africa, hinge supplier Vietnam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
