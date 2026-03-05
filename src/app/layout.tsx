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
  title: "Fachri — Web Developer & Software Developer",
  description:
    "Portfolio M. Fachri Mufidan, siswa RPL SMK Negeri 1 Slawi — Web Developer & Software Developer yang bersemangat dalam pengembangan web modern.",
  keywords: [
    "Fachri",
    "M. Fachri Mufidan",
    "Web Developer",
    "Software Developer",
    "Portfolio",
    "RPL",
    "SMK Negeri 1 Slawi",
    "Next.js",
    "React",
    "PHP",
  ],
  authors: [{ name: "M. Fachri Mufidan" }],
  openGraph: {
    title: "Fachri — Web Developer & Software Developer",
    description:
      "Portfolio M. Fachri Mufidan, siswa RPL SMK Negeri 1 Slawi yang bersemangat dalam pengembangan web modern.",
    url: "https://pahri.dev",
    siteName: "Fachri Portfolio",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fachri — Web Developer",
    description: "Portfolio M. Fachri Mufidan — Web Developer & Software Developer",
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
