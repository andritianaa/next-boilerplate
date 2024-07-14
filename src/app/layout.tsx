import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

import { metadata as meta } from "@/lib/metadata";
import { Providers } from "@/providers";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = meta;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <NextTopLoader showSpinner={false} color="#7c3aed" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
