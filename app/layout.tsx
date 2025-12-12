import type { Metadata } from "next";
import "./globals.css";
import "./animations.css";
import { Roboto, Roboto_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Menu } from "@/components/Menu";

const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"] });
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Its Web App",
  description: "Web application for its",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased bg-yellow-900 h-screen`}
      >
        <Menu />
        <main className="bg-blue-900 max-w-screen w-full p-[1vw] mx-auto box-border">
          <Header />

          {children}

          <Footer />
        </main>
      </body>
    </html>
  );
}
