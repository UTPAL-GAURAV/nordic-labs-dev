import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Nordic Labs Dev",
  description:
    "Building elegant digital experiences with clean code, thoughtful design, and modern technology.",
  openGraph: {
    title: "Nordic Labs Dev",
    description:
      "Building elegant digital experiences with clean code, thoughtful design, and modern technology.",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Nordic Labs Dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nordic Labs Dev",
    description:
      "Building elegant digital experiences with clean code, thoughtful design, and modern technology.",
    images: ["/assets/logo.png"],
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
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
