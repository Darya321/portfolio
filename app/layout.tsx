import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/custom-cursor";
import { Header } from "@/components/header";
import { MotionProvider } from "@/components/motion-provider";

export const metadata: Metadata = {
  title: "Нестеркина Дарья — Product / UI-UX Designer Portfolio",
  description: "Портфолио product, UI/UX и visual designer: интерфейсы, визуальные системы, презентации и digital-материалы.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <MotionProvider>
          <Header />
          {children}
          <div className="grain" aria-hidden="true" />
          <CustomCursor />
        </MotionProvider>
      </body>
    </html>
  );
}
