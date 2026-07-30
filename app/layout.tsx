import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ApplyOrbitA — Find Your Dream Internship & Job",
  description: "ApplyOrbitA connects talented students and professionals with internships, jobs, and career opportunities. 5000+ jobs posted, 1000+ trusted companies. Start your career journey today.",
  verification: {
    google: "EeBOO1F1gdXvhsnFlFwmq1D1VsN5j1eBbXAjXTxX1Qg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
