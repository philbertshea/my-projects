import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Philbert's Projects",
  description: "I am Philbert Shea, an NUS Undergraduate taking Computer Science and Business Administration. Learn about my projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <script src="/res/livechat_script.js" />
        </body>
    </html>
  );
}
