import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/layout/navbar";
import ClientFooter from "@/components/layout/clientFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crowdfunding and Property Sales | بيع وشراء العقارات عبر التمويل الجماعي",
  description: "Join our real estate crowdfunding platform to buy, sell, and invest in properties. Secure your future with property investments today! | انضم إلى منصتنا للتمويل الجماعي لشراء وبيع العقارات. تأمين مستقبلك من خلال الاستثمارات العقارية اليوم!",
  keywords: [
    "real estate crowdfunding", "property investment", "buy property", "sell property", 
    "real estate investment platform", "crowdfunding platform for real estate", 
    "buy and sell real estate online", "property crowdfunding",
    "التمويل الجماعي العقاري", "استثمار العقارات", "شراء وبيع العقارات"
  ],
  // generator: "Next.js",
  // manifest: "/manifest.json",
  // themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Zakaria Zinedine" },
    {
      name: "Zakaria Zinedine",
      url: "zakariazinedine1@gmail.com",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-icon", url: "icons/icon.png" },
    { rel: "icon", url: "icons/icon.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full` }
      >
        

        <div 
    className="w-full h-6 bg-secondary text-secondary-foreground text-center news-bar-container">
      <div className={ 'bg-black text-white text-center pb-0.5 rounded-e-full rounded-ss-full font-light overflow-hidden marqueeAr'}>
      سجل واحصل على خصم
      </div>
    </div>
         
          <NavBar />
        {children}
        <ClientFooter/>
      </body>
    </html>
  );
}
