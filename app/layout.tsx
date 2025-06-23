import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title:
    "BornToBuild | Empowering Lives Through Charity & Community Development",
  description:
    "BornToBuild is a non-profit organization dedicated to transforming lives through education, sustainable development, and community empowerment across underserved regions.",

  robots: "index, follow",
  openGraph: {
    title: "BornToBuild | Charity for Sustainable Change",
    description:
      "Join BornToBuild in making a lasting impact through charity, education, and sustainable community development. Together, we build brighter futures.",
    url: "https://yourborntobuilddomain.org",
    type: "website",
    locale: "en_US",
    siteName: "BornToBuild",
  },
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
