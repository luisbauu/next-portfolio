import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Jose Luis Bautista",
  description: "Jose Luis Bautista's Portfolio Website",
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "@/public/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "@/public/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "@/public/favicon-16x16.png",
    },
    {
      rel: "mask-icon",
      url: "@/public/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
    { rel: "shortcut icon", url: "@/public/favicon.ico" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:url" content="https://www.luisbau.me/" />
        <meta property="og:title" content="Jose Luis Bautista" />
        <meta
          property="og:description"
          content="Welcome to my portfolio! Discover a collection of my  web and game development projects."
        />
        <meta property="twitter:title" content="Jose Luis Bautista" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Jose Luis Bautista" />
      </head>
      <body className="bg-background text-primary">
        {children}
        <NavBar />
      </body>
      <Analytics />
    </html>
  );
}
