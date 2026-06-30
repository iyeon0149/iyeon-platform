import type { Metadata } from 'next';
import { Inter, Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const notoSansKr = Noto_Sans_KR({ subsets: ['latin'], variable: '--font-pretendard', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://iyeon.kr'),
  title: '이연 IYEON | K-Industry Operating System',
  description: 'IYEON은 대한민국 산업의 가능성을 글로벌 가치로 연결하는 K-Industry Operating System Company입니다.',
  keywords: ['이연', 'IYEON', 'K-Beauty', 'K-Food', 'AI Healthcare', '글로벌 플랫폼', '벤처빌더'],
  authors: [{ name: 'IYEON Co., Ltd.' }],
  verification: {
    google: 'google-site-verification=e6l9GKF4vtwoSXhcGHRvY5cuqSRTJvzz8gdh2i8TblA',
    other: {
      'naver-site-verification': '4e84bf030dd8865ff2159b4b02d3bdcdae13eb21'
    }
  },
  openGraph: {
    type: 'website',
    url: 'https://iyeon.kr',
    title: '이연 IYEON | 글로벌 K산업 플랫폼',
    description: 'Connecting Korean Potential to Global Reality',
    siteName: 'IYEON'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${inter.variable} ${notoSansKr.variable}`}>
      <body className="font-kr">
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
