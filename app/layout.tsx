import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IA-1stEngine SaaS Base",
  description: "DataVisio SaaS starter with IA-1stEngine governance",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
