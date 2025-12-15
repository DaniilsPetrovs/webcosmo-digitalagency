
import "./globals.css";
import { ReactNode } from "react";
import { LangProvider } from "./context/LangContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "eCommerce & Web Development Agency | WebCosmo",
  description:
    "WebCosmo is a leading ecommerce and web development agency building high-performance websites, scalable ecommerce platforms, and blockchain-powered digital solutions.",
  keywords:
    "web development, web3 development, blockchain, digital agency, smart contract development, decentralized applications, creative design, UI/UX, Webcosmo",
  authors: [{ name: "Webcosmo" }],
  robots: "index, follow",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "eCommerce & Web Development Agency | WebCosmo",
    description:
      "WebCosmo is a leading ecommerce and web development agency building high-performance websites, scalable ecommerce platforms, and blockchain-powered digital solutions.",
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
