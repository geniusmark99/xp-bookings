import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "XP Booking Hom page",
  description: "Where you meet your true love",

};

export const viewport = {
  themeColor: '#1F1923',
}
 

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
    </html>
    </>

  );
}
