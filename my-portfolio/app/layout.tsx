import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const monte = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nathan's Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monte.className}>{children}</body>
    </html>
  );
}
