import { directions } from '../data/festival';

// Archived festival program presented as a fixed example of 2 February 2026.
// No interactive selection: the red marker consistently represents the same day.
const REFERENCE_DAY = 4;
export function Schedule() {
  return (
    <section className="schedule dark-section" id="schedule" aria-labelledby="schedule-title">
      <div className="dark-grain" aria-hidden="true" />
      <div className="schedule-header">
        <h2 className="section-title" id="schedule-title">РАСПИСАНИЕ</h2>
        <span className="red-slash" aria-hidden="true">/</span>
        <p>СЕМЬ НАПРАВЛЕНИЙ<br />ОДИН ФЕСТИВАЛЬ</p>
        <span className="schedule-year">2026 / АРХИВ</span>
      </div>
      <div className="schedule-context" aria-label="Демонстрационное состояние календаря на 2 февраля 2026 года">
        <span><span className="schedule-context-dot" aria-hidden="true" />СОСТОЯНИЕ НА 02.02.2026</span>
        <span>ПРОШЛИ <i className="legend-swatch legend-past" aria-hidden="true" /></span>
        <span>ДЕНЬ ФЕСТИВАЛЯ <i className="legend-swatch legend-current" aria-hidden="true" /></span>
        <span>ВПЕРЕДИ <i className="legend-swatch legend-next" aria-hidden="true" /></span>
      </div>
      <div className="schedule-grid" aria-label="Календарь семи направлений — статическая временная шкала">
        {directions.map((item, index) => (
          <div key={item.id} className={`schedule-day ${index < REFERENCE_DAY ? 'is-past' : index === REFERENCE_DAY ? 'is-current' : 'is-future'}`} aria-label={`${item.name}, ${item.date}${index === REFERENCE_DAY ? ', день фестиваля в демонстрационной шкале' : ''}`}>
            <strong>{item.compactDay}</strong>
            <span>{item.month}</span>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <p className="schedule-bottom-note">ГАЛА-КОНЦЕРТ <b>13.02.2026</b><span aria-hidden="true">/</span> КОНКУРСНАЯ ПРОГРАММА ЗАВЕРШЕНА</p>
    </section>
  );
}
