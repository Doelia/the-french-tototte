import type {Metadata} from "next";
import "./globals.css";

import {custavo} from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "The French Tototte",
  description: "",
    icons: {
        icon: '/favicon.webp',
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script src="https://kit.fontawesome.com/4ad02e5046.js" crossOrigin="anonymous"></script>
      </head>
      <body className={custavo.className + ' bg-bg2'}>{children}</body>
    </html>
  );
}
