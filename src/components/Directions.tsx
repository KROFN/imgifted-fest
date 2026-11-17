import { directions } from '../data/festival';

export function Directions() {
  return (
    <section className="directions paper-section" id="directions" aria-labelledby="directions-title">
      <div className="section-aside">
        <h2 id="directions-title" className="section-title"><strong>7</strong><br />НАПРАВЛЕНИЙ<br />ФЕСТИВАЛЯ</h2>
        <p className="aside-serif">Семь форм творчества.<br />Одна сцена.</p>
        <a className="aside-link" href="#schedule">РАСПИСАНИЕ <span aria-hidden="true">↘</span></a>
      </div>
      <div className="direction-list" aria-label="Семь направлений фестиваля">
        {directions.map((item) => (
          <div key={item.id} className="direction-row">
            <img src={`${import.meta.env.BASE_URL}${item.texture.replace(/^\//, '')}`} alt="" loading="lazy" width="152" height="78" />
            <span className="direction-number">{item.id} <i>/</i></span>
            <span className="direction-name">{item.name}</span>
            <span className="direction-date">{item.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
