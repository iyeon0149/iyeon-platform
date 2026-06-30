import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { navItems } from '@/lib/navigation';
import { ButtonLink } from '@/components/ui/button';

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/78 backdrop-blur-2xl">
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="IYEON Home">
          <Image
            src="/images/logo.jpg"
            alt="IYEON"
            width={172}
            height={54}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-700 transition hover:bg-black/[0.04] hover:text-iyeon-orange"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="text-xs font-semibold tracking-[0.16em] text-slate-500">KOR <span className="mx-2 text-slate-300">|</span> ENG</div>
          <ButtonLink href="/investor" variant="outline" className="px-5 py-2.5 text-xs">
            Investor Portal
          </ButtonLink>
        </div>

        <button className="rounded-full border border-iyeon-line bg-white p-3 lg:hidden" aria-label="Open menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
