import type { ReactNode } from 'react';
import { ArrowIcon } from './ArrowIcon';
import type { PanelKey } from '../data/festival';

const actions: { panel: PanelKey; label: ReactNode }[] = [
  { panel: 'registration', label: <>ПОДАТЬ ЗАЯВКУ</> },
  { panel: 'ages', label: <>ВОЗРАСТНЫЕ<br />КАТЕГОРИИ</> },
  { panel: 'rules', label: <>ТРЕБОВАНИЯ<br />К ВЫСТУПЛЕНИЯМ</> },
  { panel: 'contacts', label: <>КОНТАКТЫ<br />ОРГАНИЗАТОРОВ</> },
];

export function Participants({ onOpen }: { onOpen: (key: PanelKey) => void }) {
  return (
    <section className="participants paper-section" id="participants" aria-labelledby="participants-title">
      <div className="participants-heading"><h2 className="section-title" id="participants-title">УЧАСТНИКАМ</h2><span className="red-slash" aria-hidden="true">/</span><p>Вся необходимая информация<br />для подготовки и участия в фестивале.</p></div>
      <div className="participants-grid">
        {actions.map((a, index) => <button key={a.panel} data-panel={a.panel} className={`participant-tile${index === 0 ? ' primary' : ''}`} type="button" onClick={() => onOpen(a.panel)}>{a.label}<span className="ui-arrow" aria-hidden="true"><ArrowIcon /></span></button>)}
      </div>
    </section>
  );
}
