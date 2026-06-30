import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
};

export function SectionHeading({ eyebrow, title, description, align = 'center', dark = false }: SectionHeadingProps) {
  return (
    <div className={cn('mx-auto max-w-3xl', align === 'center' ? 'text-center' : 'text-left')}>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-iyeon-orange">{eyebrow}</p>
      <h2 className={cn('text-4xl font-black tracking-[-0.05em] md:text-6xl', dark ? 'text-white' : 'text-iyeon-ink')}>
        {title}
      </h2>
      {description && (
        <p className={cn('mt-6 text-base leading-8 md:text-lg', dark ? 'text-white/62' : 'text-slate-600')}>
          {description}
        </p>
      )}
    </div>
  );
}
