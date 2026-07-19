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

const SITE_URL = "https://www.tirupatihinges.com";
const BRAND = "Tirupati Hinges & Hardware Exports";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND} — Premium Door Hinge Manufacturer | Aligarh, India`,
    template: `%s | ${BRAND}`,
  },
  description:
    "Leading door hinge manufacturer and exporter from Aligarh, India. Supplying premium quality butt hinges, ball bearing hinges, concealed hinges and heavy-duty hardware to UAE, South Africa, Vietnam and 40+ global markets. ISO 9001 certified.",
  keywords:
    "door hinge manufacturer India, Aligarh hinge exporter, heavy duty hinges UAE, door hinges South Africa, hinge supplier Vietnam, Tirupati Hinges Hardware Exports, SS hinge manufacturer India, butt hinge exporter",
  authors: [{ name: BRAND }],
  creator: BRAND,
  publisher: BRAND,
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    siteName: BRAND,
    locale: "en_IN",
    type: "website",
    url: SITE_URL,
    title: `${BRAND} — Premium Door Hinge Manufacturer | Aligarh, India`,
    description:
      "Door hinge manufacturer and exporter from Aligarh, India, serving 40+ countries. ISO 9001 certified. Butt hinges, ball bearing hinges, concealed hinges, heavy-duty hardware and custom OEM manufacturing.",
    images: [{ url: "/img/hinge-pile.jpg", width: 1200, height: 630, alt: `${BRAND} — precision-manufactured door hinges` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND} — Premium Door Hinge Manufacturer | Aligarh, India`,
    description:
      "Door hinge manufacturer and exporter from Aligarh, India, serving 40+ countries. ISO 9001 certified.",
    images: ["/img/hinge-pile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND,
  alternateName: "Tirupati Hinges",
  url: SITE_URL,
  logo: `${SITE_URL}/img/hinge-pile.jpg`,
  description:
    "Door hinge manufacturer and exporter based in Aligarh, India, serving 40+ countries including UAE, South Africa, Vietnam and Kenya.",
  foundingDate: "2010",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sector 2, Talanagri",
    addressLocality: "Aligarh",
    addressRegion: "Uttar Pradesh",
    postalCode: "202001",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7310572361",
    contactType: "sales",
    email: "Tirupatiassociates07@gmail.com",
    areaServed: "Worldwide",
  },
  sameAs: [] as string[],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
