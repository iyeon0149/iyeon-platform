import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'dark';
  className?: string;
};

export function ButtonLink({ href, children, variant = 'primary', className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300',
        variant === 'primary' && 'bg-iyeon-gradient text-white shadow-glow hover:-translate-y-0.5',
        variant === 'outline' && 'border border-iyeon-line bg-white/70 text-iyeon-ink hover:border-iyeon-orange hover:text-iyeon-orange',
        variant === 'dark' && 'bg-iyeon-navy text-white hover:bg-black',
        className
      )}
    >
      {children}
      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
