import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MLBB Teams",
  description: "Mobile Legends: Bang Bang teams — coming soon.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
