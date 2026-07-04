import type { Metadata } from "next";
import { Anton, Fraunces, Work_Sans, Space_Mono } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

// Display face — condensed poster weight for big editorial statements
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

// Accent face — quirky, soft serif used in italic for editorial asides
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

// Body face — clean humanist grotesk for readability
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

// Utility face — mono for labels, prices, tags, credits
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TINT. — A Color Studio",
  description:
    "TINT. is a color studio for people who don't do bland. Bold cuts, custom color, and blowouts that don't quit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${fraunces.variable} ${workSans.variable} ${spaceMono.variable} font-body bg-paper text-ink antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
