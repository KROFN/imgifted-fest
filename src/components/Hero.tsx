import type { CSSProperties } from 'react';

// Cut lines follow the ORIGINAL art's diagonal printed seams.
// Every layer samples the same 702x415 collage: no remade imagery, no asset drift.
const collageStrips = [
  { edge: 'polygon(0% 0%,43% 0%,24.5% 100%,0% 100%)', x: '-74px', y: '18px', angle: '-2.8deg', delay: 0, duration: 1040 },
  { edge: 'polygon(43% 0%,52.8% 0%,34.5% 100%,24.5% 100%)', x: '-58px', y: '92px', angle: '-3.5deg', delay: 125, duration: 900 },
  { edge: 'polygon(52.8% 0%,62.2% 0%,44% 100%,34.5% 100%)', x: '26px', y: '-110px', angle: '2deg', delay: 250, duration: 910 },
  { edge: 'polygon(62.2% 0%,71% 0%,52.7% 100%,44% 100%)', x: '-25px', y: '76px', angle: '-2.2deg', delay: 360, duration: 900 },
  { edge: 'polygon(71% 0%,80% 0%,61.9% 100%,52.7% 100%)', x: '33px', y: '-92px', angle: '2deg', delay: 465, duration: 930 },
  { edge: 'polygon(80% 0%,89.3% 0%,71.3% 100%,61.9% 100%)', x: '66px', y: '73px', angle: '3.2deg', delay: 565, duration: 940 },
  { edge: 'polygon(89.3% 0%,99.3% 0%,81.5% 100%,71.3% 100%)', x: '95px', y: '-36px', angle: '2.7deg', delay: 680, duration: 900 },
  { edge: 'polygon(99.3% 0%,100% 0%,100% 100%,81.5% 100%)', x: '90px', y: '15px', angle: '1.5deg', delay: 760, duration: 900 },
] as const;

const artSrc = `${import.meta.env.BASE_URL}assets/hero-collage.webp`;

export function Hero() {
  return (
    <section className="hero" id="about" aria-labelledby="hero-title">
      <div className="hero-art" aria-hidden="true">
        {/* Real image is the exact post-animation result and reduced-motion fallback. */}
        <img className="hero-art-base" src={artSrc} alt="" width="702" height="415" fetchPriority="high" />
        <div className="hero-art-assembly" aria-hidden="true">
          {collageStrips.map((strip, index) => (
            <img
              key={index}
              className="hero-art-slice"
              src={artSrc}
              alt=""
              width="702"
              height="415"
              decoding="async"
              style={{
                '--slice-clip': strip.edge,
                '--slice-x': strip.x,
                '--slice-y': strip.y,
                '--slice-angle': strip.angle,
                '--slice-delay': `${strip.delay}ms`,
                '--slice-duration': `${strip.duration}ms`,
              } as CSSProperties}
            />
          ))}
        </div>
        <span className="hero-art-rough" />
      </div>
      <div className="hero-content">
        <p className="hero-kicker">Фестиваль творчества<br />детей и молодёжи <span className="hairline" aria-hidden="true" /></p>
        <h1 id="hero-title" className="hero-title">Я ТАЛАНТЛИВ</h1>
        <div className="hero-manifest"><span className="red-stroke" aria-hidden="true" /><p>ПЕРВЫЙ<br />ВЫХОД</p></div>
        <p className="hero-side-note">Семь направлений.<br />Одна сцена.</p>
      </div>
      <div className="hero-date-banner" aria-label="Конкурсные дни: 26 января — 6 февраля 2026 года">
        <span className="hero-date-range"><span className="hero-date-start">26.01</span><span className="hero-date-dash" aria-hidden="true">—</span><span className="hero-date-end">06.02.2026</span></span>
      </div>
    </section>
  );
}
