import { useEffect, useState } from 'react';
import { Header, Footer } from './components/Header';
import { Hero } from './components/Hero';
import { Directions } from './components/Directions';
import { Schedule } from './components/Schedule';
import { Participants } from './components/Participants';
import { FAQ } from './components/FAQ';
import { InfoDialog } from './components/InfoDialog';
import type { PanelKey } from './data/festival';

export default function App() {
  const [panel, setPanel] = useState<PanelKey | null>(null);
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const selectors = '.section-aside, .direction-row, .schedule-header, .schedule-context, .schedule-bottom-note, .participants-heading, .participant-tile, .faq-intro, .faq-item, .footer';
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selectors));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08, rootMargin: '0px 0px 28px 0px' });
    elements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight * .92) return;
      element.style.setProperty('--reveal-delay', `${(index % 5) * 45}ms`);
      element.classList.add('motion-pending');
      observer.observe(element);
    });
    return () => { observer.disconnect(); elements.forEach(el => el.classList.remove('motion-pending','is-revealed')); };
  }, []);
  return (
    <>
      <div className="page-texture" aria-hidden="true" />
      <a className="skip-link" href="#main">К содержанию</a>
      <Header />
      <main id="main">
        <Hero />
        <Directions />
        <Schedule />
        <Participants onOpen={setPanel} />
        <FAQ />
      </main>
      <Footer />
      <InfoDialog panel={panel} onClose={() => setPanel(null)} />
    </>
  );
}
