import type { Metadata, Viewport } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const cabinFont = Cabin({
  weight: ["600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robert Chen - Software Engineer",
  // description: "",
};

export const viewport: Viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cabinFont.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
