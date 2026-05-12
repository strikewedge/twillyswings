import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://twillyswings.com"),
  title: "twillyswings",
  description: "massive golf nerd. stuff i've made.",
  openGraph: {
    title: "twillyswings",
    description: "massive golf nerd. stuff i've made.",
    images: ["/icons/strikewedge.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] font-sans">
        {children}
      </body>
    </html>
  );
}
