import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: '정의법무법인 | 신뢰할 수 있는 법률 파트너',
  description: '민사소송, 형사변론, 기업법무, 가사소송 전문. 15년 경력의 변호사진이 고객의 권익 보호를 위해 최선을 다합니다.',
  keywords: '법무법인, 변호사, 민사소송, 형사변론, 기업법무, 가사소송, 법률상담',
  openGraph: {
    title: '정의법무법인',
    description: '신뢰할 수 있는 법률 파트너',
    type: 'website',
    locale: 'ko_KR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
