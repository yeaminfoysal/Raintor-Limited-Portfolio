import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio - Raintor LTD",
  description: "Raintor Limited",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
        cz-shortcut-listen="true"
      >
        <Navbar />
        <main className="max-w-[1440px] mx-auto">
          {children}
        </main>
        <Footer/>
      </body>
    </html >
  );
}
