import type { Metadata } from "next";
import "./globals.css";
import "../styles/fonts.css"
import "../styles/wrapper.css"
import { Navbar } from "@/components/Navigation/Navbar";

export const metadata: Metadata = {
  title: "Sourin Sarkar",
  description: "Online address of Sourin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-4 md:mx-12">
        <main className="pb-24 max-w-screen-xl mx-auto">
          {children}
        </main>
        <Navbar />
      </body>
    </html>
  );
}
