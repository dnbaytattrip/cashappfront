import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cash App",
  description: "Cash App",
  openGraph: {
    title: "Cash App",
    description: "Cash App",
    url: "https://cashappfront.vercel.app", // your real page URL
    siteName: "cashapp",
    images: [
      {
        url: "https://newsite-livid.vercel.app/cashmeta.jpg", // ✅ Your image URL
        width: 1200,
        height: 630,
        alt: "CashMeta Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "Cash App",
    title: "Cash App",
    description: "Cash App",
    images: ["https://newsite-livid.vercel.app/cashmeta.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
