import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import localFont from "next/font/local";

const pixelFont = localFont({ src: "../fonts/pixelBios.ttf" });
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robert Chen - Software Engineer",
  // description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={pixelFont.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
