import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "স্বপ্ন বিলাস নার্সারি | Swapna Bilas Nursery - জয়পুরহাট",
  description:
    "স্বপ্ন বিলাস নার্সারি (Swapna Bilas Nursery), জয়পুরহাট সদর (428H+6CR)। ছাত্র, শখের বাগানি, উদ্যোক্তা ও অনলাইন সেলার। বাগান বিলাস সহ নানা রকমের সৌন্দর্যময় ফুল ও গাছের সমাহার। যোগাযোগ: 01880-803067, 01625-409484।",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      suppressHydrationWarning
      className={`${hindSiliguri.variable} h-full antialiased scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#FAFBF8] text-[#132A13] font-sans"
      >
        {children}
      </body>
    </html>
  );
}
