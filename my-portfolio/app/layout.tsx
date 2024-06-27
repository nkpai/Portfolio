import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";

const work = Work_Sans({ subsets: ["latin"] });

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
      <body className={work.className}>{children}</body>
    </html>
  );
}
