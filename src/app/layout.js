import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "XP Booking Hom page",
  description: "Where you meet your true love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <meta name="theme-color" content="#000000" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
