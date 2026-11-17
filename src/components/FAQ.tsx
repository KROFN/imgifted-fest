import { useState } from 'react';
import { questions } from '../data/festival';

export function FAQ() {
  const [expanded, setExpanded] = useState<Set<number>>(() => new Set([0, 1]));
  const toggle = (index: number) => setExpanded(old => {
    const next = new Set(old);
    if (next.has(index)) next.delete(index); else next.add(index);
    return next;
  });
  return (
    <section className="faq paper-section" id="faq" aria-labelledby="faq-title">
      <div className="faq-intro">
        <h2 className="section-title" id="faq-title">ВОПРОСЫ<br />И ОТВЕТЫ</h2>
        <p className="faq-annotation">Всё важное —<br />без лишних формальностей.</p>
        <span className="faq-serial">XVI / 2026</span>
      </div>
      <div className="faq-list">
        {questions.map((q, index) => (
          <div className={`faq-item${expanded.has(index) ? ' is-open' : ''}`} key={q.q}>
            <h3><button type="button" className="faq-question" aria-expanded={expanded.has(index)} aria-controls={`faq-answer-${index}`} onClick={() => toggle(index)}>
              <span className="faq-index">0{index + 1}</span><span className="faq-question-title">{q.q}</span><span className="faq-toggle" aria-hidden="true">{expanded.has(index) ? '−' : '+'}</span>
            </button></h3>
            <div id={`faq-answer-${index}`} className="faq-answer-wrap" aria-hidden={!expanded.has(index)}>
              <div className="faq-answer"><p>{q.a}</p></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
