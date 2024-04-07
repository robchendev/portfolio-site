import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const cabinFont = Cabin({
  weight: ["600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robert Chen - Software Engineer",
  viewport: "width=device-width, initial-scale=1.0",
  // description: "",
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
