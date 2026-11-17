import { useEffect, useRef } from 'react';
import { directions, type PanelKey } from '../data/festival';

const panelTitles: Record<PanelKey, string> = {
  registration: 'ПОДАТЬ ЗАЯВКУ',
  ages: 'ВОЗРАСТНЫЕ КАТЕГОРИИ',
  rules: 'ТРЕБОВАНИЯ К ВЫСТУПЛЕНИЯМ',
  contacts: 'КОНТАКТЫ ОРГАНИЗАТОРОВ',
};

export function InfoDialog({ panel, onClose }: { panel: PanelKey | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (panel && !dialog.open) {
      openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      dialog.showModal();
    } else if (!panel && dialog.open) dialog.close();
  }, [panel]);
  const close = () => { onClose(); requestAnimationFrame(() => openerRef.current?.focus()); };
  return (
    <dialog ref={ref} id="info-dialog" aria-labelledby="dialog-title" onClose={close} onCancel={close}>
      <div className="dialog-head"><span className="dialog-label">Я ТАЛАНТЛИВ / ФЕСТИВАЛЬ 2026</span><button type="button" onClick={close} aria-label="Закрыть окно">×</button></div>
      <h2 id="dialog-title">{panel ? panelTitles[panel] : ''}</h2>
      <div id="dialog-content">
        {panel === 'registration' && (
          <form onSubmit={e => e.preventDefault()} aria-label="Демонстрационная форма заявки" className="application-form">
            <p className="dialog-lead">Расскажи о себе и выбери своё направление.</p>
            <div className="application-fields">
              <label>Имя участника<input autoComplete="off" name="name" type="text" minLength={2} maxLength={80} placeholder="Имя и фамилия" /></label>
              <label>Электронная почта<input autoComplete="off" name="email" type="email" placeholder="name@example.com" /></label>
              <label>Формат участия<select name="format" defaultValue=""><option value="" disabled>Выберите формат</option><option value="solo">Индивидуальный</option><option value="group">Коллектив</option><option value="family">Семейный</option></select></label>
              <label>Направление<select name="category" defaultValue=""><option value="" disabled>Выберите направление</option>{directions.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}</select></label>
            </div>
            <button type="button" disabled aria-disabled="true" className="demo-disabled-button">ОТПРАВИТЬ ЗАЯВКУ ↗</button>
            <span className="demo-label">Демо: форма не отправляет и не сохраняет данные.</span>
          </form>
        )}
        {panel === 'ages' && (
          <div className="info-facts">
            <div className="info-stat"><strong>4+</strong><span>Минимальный возраст участников фестиваля 2026</span></div>
            <h3 className="dialog-subheading">ВОЗРАСТНЫЕ ГРУППЫ</h3>
            <div className="age-grid" aria-label="Пример распределения возрастных групп в дизайн-макете">
              {['04—06','07—10','11—14','15—18','19+'].map((x,i)=><span key={x}><b>{x}</b><small>{['ДОШКОЛЬНИКИ','МЛАДШИЕ','ПОДРОСТКИ','СТАРШИЕ','ВЗРОСЛЫЕ'][i]}</small></span>)}
            </div>
            <p className="info-hint">Диапазоны выше — демонстрация интерфейса, не официальная возрастная сетка.</p>
            <p className="dialog-supporting">Индивидуальные, коллективные и семейные выступления. Участие очно или дистанционно.</p>
          </div>
        )}
        {panel === 'rules' && (
          <div className="info-facts">
            <div className="info-stat"><strong>12</strong><span>Номинаций фестиваля 2026 года</span></div>
            <h3 className="dialog-subheading">ЧТО ПОДГОТОВИТЬ</h3>
            <div className="requirements-list">
              <div><span className="requirement-number">01</span><strong>ДАННЫЕ УЧАСТНИКА</strong><p>Имя, возраст, название коллектива (если есть), направление участия.</p></div>
              <div><span className="requirement-number">02</span><strong>ДЛЯ СЦЕНИЧЕСКОГО НОМЕРА</strong><p>Название выступления, состав, фонограмма и пожелания по техническому оснащению.</p></div>
              <div><span className="requirement-number">03</span><strong>ДЛЯ ТВОРЧЕСКОЙ РАБОТЫ</strong><p>Фотографии или файлы проекта, название, авторство, короткое описание.</p></div>
              <div><span className="requirement-number">04</span><strong>ПРОВЕРИТЬ ПЕРЕД ОТПРАВКОЙ</strong><p>Актуальность данных, формат участия, права на материалы и согласие представителя несовершеннолетнего.</p></div>
            </div>
            <p className="info-hint">Это пример организации требований в интерфейсе, а не регламент конкурса.</p>
          </div>
        )}
        {panel === 'contacts' && (
          <div className="info-facts contact-mock">
            <span className="contact-eyebrow">МАКЕТ КОНТАКТНОГО БЛОКА</span>
            <p className="contact-big">8 (800) 555-55-55</p>
            <p className="contact-support">Демонстрационный телефон · не предназначен для звонков</p>
            <div className="contact-grid"><div><span>EMAIL</span><strong>festival@example.com</strong></div><div><span>ГОРОД</span><strong>Бологое, Тверская область</strong></div></div>
            <p className="info-hint">Контакты показаны для демонстрации дизайна. Не являются контактами организаторов.</p>
          </div>
        )}
      </div>
      <button className="dialog-dismiss" type="button" onClick={close}>ЗАКРЫТЬ</button>
    </dialog>
  );
}
