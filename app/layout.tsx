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
        <main className="min-h-screen relative px-6 sm:px-12 lg:max-w-[80rem] xl:max-w-[96rem] 2xl:max-w-[120rem] 4k:max-w-full overflow-x-hidden max-w-[vw]">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
