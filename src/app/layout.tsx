import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "M. Fachri Mufidan — Full Stack Developer",
  description:
    "Portfolio M. Fachri Mufidan — Full Stack Developer & BNSP Certified Web Developer. Berpengalaman di Next.js, Laravel, arsitektur database, dan modern web application.",
  keywords: [
    "Fachri",
    "M. Fachri Mufidan",
    "Full Stack Developer",
    "Software Developer",
    "BNSP Certified",
    "CV Vodeco Digital Mediatama",
    "Portfolio",
    "RPL",
    "SMK Negeri 1 Slawi",
    "Cakrawala University",
    "Next.js",
    "Laravel",
    "React",
    "PHP",
  ],
  authors: [{ name: "M. Fachri Mufidan" }],
  openGraph: {
    title: "M. Fachri Mufidan — Full Stack Developer",
    description:
      "Portfolio M. Fachri Mufidan — Full Stack Developer & BNSP Certified Web Developer. Berpengalaman di Next.js, Laravel, arsitektur database, dan modern web application.",
    url: "https://mfchmufid.my.id",
    siteName: "Fachri Portfolio",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "M. Fachri Mufidan — Full Stack Developer",
    description: "Portfolio M. Fachri Mufidan — Full Stack Developer & BNSP Certified Web Developer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
