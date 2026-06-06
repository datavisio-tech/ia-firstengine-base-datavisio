import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IA-1stEngine SaaS Base",
  description: "IA-1stEngine SaaS base with onboarding, harness engineering and stack navigation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
