import { Globe2, Layers3, Rocket, ShieldCheck } from 'lucide-react';
import { ButtonLink } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';

const metrics = [
  { icon: Globe2, value: '70+', label: 'Countries', desc: '글로벌 네트워크' },
  { icon: ShieldCheck, value: '200+', label: 'Partners', desc: '전략적 파트너' },
  { icon: Rocket, value: '50+', label: 'Ventures', desc: '투자 및 육성 기업' },
  { icon: Layers3, value: '10M+', label: 'Consumers', desc: '글로벌 소비자 접점' }
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-y-0 right-0 hidden w-[58%] bg-[radial-gradient(circle_at_42%_46%,rgba(255,91,0,0.28),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.2),rgba(255,91,0,0.08))] lg:block" />
        <div className="absolute right-[-10%] top-[-10%] h-[720px] w-[720px] rounded-full border border-iyeon-orange/10 bg-iyeon-orange/5 blur-3xl" />
        <div className="container-x relative grid min-h-[760px] items-center gap-12 py-20 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="mb-8 text-xs font-bold uppercase tracking-[0.36em] text-iyeon-orange">K-Industry Operating System</p>
            <h1 className="max-w-3xl text-6xl font-black leading-[0.95] tracking-[-0.07em] text-iyeon-ink md:text-7xl lg:text-8xl">
              Connecting Korean Potential to <span className="text-gradient">Global Reality</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600">
              이연은 대한민국의 우수한 산업과 혁신 기술을 글로벌 시장과 연결하여 새로운 가치를 창출합니다.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/about">About IYEON</ButtonLink>
              <ButtonLink href="/platform" variant="outline">Our Platform</ButtonLink>
            </div>
          </div>

          <div className="dark-glass relative min-h-[430px] overflow-hidden rounded-[2.5rem] p-8 text-white lg:min-h-[520px]">
            <div className="absolute inset-0 bg-dark-radial" />
            <div className="absolute -right-32 top-10 h-[520px] w-[520px] rounded-full border border-white/10" />
            <div className="absolute -right-16 top-24 h-[400px] w-[400px] rounded-full border border-iyeon-orange/30" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.34em] text-iyeon-orange">IYEON Platform</p>
                <h2 className="mt-5 max-w-md text-4xl font-black tracking-[-0.05em] md:text-5xl">
                  AI-Powered Venture Builder
                </h2>
                <p className="mt-5 max-w-md leading-8 text-white/62">
                  데이터와 AI, 글로벌 네트워크를 기반으로 산업의 성장과 혁신을 가속합니다.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {['Data', 'AI', 'Network', 'Capital'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white/80">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container-x relative -mt-16 pb-20">
          <div className="dark-glass grid gap-0 overflow-hidden rounded-3xl md:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="border-white/10 p-7 text-white md:border-r last:border-r-0">
                <metric.icon className="mb-4 text-white/70" />
                <p className="text-3xl font-black">{metric.value}</p>
                <p className="mt-1 text-sm font-semibold">{metric.label}</p>
                <p className="mt-1 text-xs text-white/48">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Foundation Ready"
            title={<>이제 이연 플랫폼의<br className="hidden md:block" />기초 구조가 준비되었습니다</>}
            description="공통 Layout, Header, Footer, Navigation, 컬러 시스템, 폰트 시스템을 기반으로 다음 단계에서 Home 섹션과 상세 페이지를 확장합니다."
          />
        </div>
      </section>
    </>
  );
}
