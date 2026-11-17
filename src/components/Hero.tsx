export function Hero() {
  return (
    <section className="hero" id="about" aria-labelledby="hero-title">
      <div className="hero-art" aria-hidden="true">
        <img src={`${import.meta.env.BASE_URL}assets/hero-collage.webp`} alt="" width="702" height="415" fetchPriority="high" />
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
