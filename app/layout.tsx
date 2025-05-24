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
  title: "Akbar Krishnawan - Portfolio",
  description: "Computer System student at Sriwijaya University. Full-stack developer.",
  keywords: ["Akbar Krishnawan", "Portfolio", "Full Stack Developer", "Next.js", "React", "Node.js", "Prisma", "PostgreSQL"],
  authors: [{ name: "Akbar Krishnawan" }],
  creator: "Akbar Krishnawan",
  openGraph: {
    title: "Akbar Krishnawan - Portfolio",
    description: "Computer System student at Sriwijaya University. Full-stack developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
