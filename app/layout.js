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

export const metadata = {
  title: "Kilbil The Learning Home - Best Kindergarten in Pune",
  description: "Kilbil The Learning Home, Pune's premier preschool, offers innovative early education blending play-based learning with academic excellence. We nurture creativity, confidence, and curiosity in a safe, joyful environment, preparing children for a bright future.",
  icons: {
    icon: '/kilbil.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
