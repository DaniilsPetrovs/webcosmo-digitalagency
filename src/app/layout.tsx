
import "./globals.css";
import { ReactNode } from "react";
import { LangProvider } from "./context/LangContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WebCosmo - Digital Agency",
  description:
    "Webcosmo is a leading Web and Web3 development agency specializing in cutting-edge websites, blockchain solutions, and smart contract development.",
  keywords:
    "web development, web3 development, blockchain, digital agency, smart contract development, decentralized applications, creative design, UI/UX, Webcosmo",
  authors: [{ name: "Webcosmo" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "WebCosmo - Digital Agency",
    description:
      "Webcosmo offers innovative web and Web3 development solutions, from responsive websites to blockchain integrations and dApp development.",
    url: "https://thewebcosmo.com",
    type: "website",
    images: [
      {
        url: "https://thewebcosmo.com/icon.png",
        width: 1200,
        height: 630,
        alt: "WebCosmo Thumbnail",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
