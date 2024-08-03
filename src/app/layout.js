import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Happymom.com.in",
  description: "Happy parenting program by School of Life Skills",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/favicon.ico',
        href: '/images/icon-light.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/icon.png',
        href: '/images/icon-dark.png',
      },
    ],
  },
};

export default function RootLayout({ children }) {




  






  return (
    <html lang="en">
      <head>
        <title>Happymom</title>

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
