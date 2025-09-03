import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Om Sri Skandasramam",
  description: "Temple and Ashram site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {/* Header / Navigation */}
        <header className="border-b bg-white">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-blue-700">
              Om Sri Skandasramam
            </Link>
            <nav className="flex gap-6 text-sm font-medium">
              <Link href="/ashram" className="hover:text-blue-600">Ashram</Link>
              <Link href="/sannidhis" className="hover:text-blue-600">Sannidhis</Link>
              <Link href="/poojas" className="hover:text-blue-600">Poojas</Link>
              <Link href="/guru" className="hover:text-blue-600">Guru</Link>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t bg-gray-50 mt-12">
          <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-gray-600">
            © {new Date().getFullYear()} Om Sri Skandasramam
          </div>
        </footer>
      </body>
    </html>
  );
}
