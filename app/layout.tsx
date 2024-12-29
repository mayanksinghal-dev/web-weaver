import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/NavBar";
import "./css/card.scss";
import "./css/globals.scss";
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Mayank Portfolio",
  description: "Mayank- Software developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen relative px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
