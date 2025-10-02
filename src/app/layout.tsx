import type { Metadata } from "next";
import { Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const robotoSlab = Roboto_Slab({
  weight: ['400', '600', '800'],
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  title: "Home Electronic Service",
  description: "Professional AC repair and Air Conditioning services. Expert technicians providing quality heating and cooling solutions.",
  keywords: "AC repair, Air Conditioning services, heating, cooling, air conditioning, maintenance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoSlab.variable} font-roboto antialiased`}
      >
        <SmoothScrollProvider>
          <Layout>
            {children}
          </Layout>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
