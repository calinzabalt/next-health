import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { PreviewNotice } from "./PreviewNotice";

export const metadata: Metadata = {
  title: "NextHealth - Modern Healthcare Solutions",
  description: "Book appointments with top doctors, read health tips, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col"
        )}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <PreviewNotice />
      </body>
    </html>
  );
}
