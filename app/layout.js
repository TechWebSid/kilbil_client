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
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },  // Google's preferred size
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },  // Standard favicon size
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' }   // Smaller favicon size
    ],
    shortcut: [{ url: '/favicon.ico' }],
    apple: [{ url: '/favicon.ico' }],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
