import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UrenTracker - Urenregistratie voor ZZP'ers",
  description: "Simpele urenregistratie voor slimme ZZP'ers. Track uren, genereer urenstaten en vergeet nooit meer omzet.",
  keywords: "urenregistratie, zzp, freelance, timetracking, urenstaat, factuur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
