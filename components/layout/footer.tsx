import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@/lib/navigation';

export function Footer() {
  return (
    <footer className="bg-iyeon-navy text-white">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Image src="/images/logo.jpg" alt="IYEON" width={170} height={54} className="h-11 w-auto rounded-sm bg-white object-contain p-1" />
            <p className="mt-7 max-w-xl text-3xl font-black tracking-[-0.04em]">
              The Operating System for<br />Global Korean Innovation
            </p>
            <p className="mt-5 max-w-xl leading-8 text-white/58">
              이연은 대한민국 산업의 가능성을 글로벌 시장의 현실적 가치로 연결하는 K-Industry Operating System Company입니다.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-iyeon-orange">Navigation</p>
              <div className="mt-5 grid gap-3">
                {footerLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-white/62 transition hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-iyeon-orange">Contact</p>
              <div className="mt-5 space-y-3 text-sm leading-7 text-white/62">
                <p>iyeon.korea@gmail.com</p>
                <p>+82-10-2792-0149</p>
                <p>3017 Cheongnyeo-ro, Cheongdo-gun, Gyeongsangbuk-do, Korea</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/42 md:flex-row md:items-center md:justify-between">
          <p>© 2026 IYEON Co., Ltd. All Rights Reserved.</p>
          <p>K-Industry · AI Platform · Global Venture Builder</p>
        </div>
      </div>
    </footer>
  );
}
