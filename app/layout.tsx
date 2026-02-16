import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/ui/PageTransition";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const follow = process.env.NEXT_PUBLIC_APP_ENV === "production" ? true : false;

export const metadata = {
  title: "Chisom Muorah | Frontend Engineer",
  description:
    "Frontend Engineer specializing in React, Next.js, and TypeScript. Building scalable, high-performance web applications and modern SaaS platforms.",
  keywords: [
    "Chisom Muorah",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Engineer",
    "Nigeria Software Engineer",
  ],
  authors: [{ name: "Chisom Muorah" }],
  creator: "Chisom Muorah",
  openGraph: {
    title: "Chisom Muorah | Frontend Engineer",
    description:
      "Building scalable, high-performance web applications with React and Next.js.",
    url: "/",
    siteName: "Chisom Muorah Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
    type: "website",
  },
  twitter: {
    title: "Chisom Muorah | Frontend Engineer",
    description:
      "Building scalable, high-performance web applications with React and Next.js.",
    url: "/",
    siteName: "Chisom Muorah Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
    type: "website",
  },
  icons: {
    shortcut: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
      },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },

  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },

  robots: {
    index: follow,
    follow: follow,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable} antialiased`}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
