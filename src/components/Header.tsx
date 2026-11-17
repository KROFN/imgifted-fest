import { useEffect, useRef, useState } from 'react';

const links = [
  { label: 'О фестивале', href: '#about' },
  { label: 'Направления', href: '#directions' },
  { label: 'Расписание', href: '#schedule' },
  { label: 'Участникам', href: '#participants' },
  { label: 'FAQ', href: '#faq' },
];

function Mark({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" className={`brand${footer ? ' footer-brand' : ''}`} aria-label="Я Талантлив — к началу страницы">
      <span className="brand-ya">Я</span><span>ТАЛАНТЛИВ</span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) { setOpen(false); toggleRef.current?.focus(); }
    };
    const onOutside = (event: PointerEvent) => {
      if (open && !menuRef.current?.contains(event.target as Node) && !toggleRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onEscape);
    document.addEventListener('pointerdown', onOutside);
    return () => {
      document.removeEventListener('keydown', onEscape);
      document.removeEventListener('pointerdown', onOutside);
    };
  }, [open]);
  return (
    <>
      <header className="site-header" id="top">
        <Mark />
        <span className="brand-slash" aria-hidden="true">/</span>
        <nav className="desktop-nav" aria-label="Главное меню">{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
        <a className="header-cta" href="#participants">Принять участие <span aria-hidden="true">↗</span></a>
        <button ref={toggleRef} className={`menu-toggle${open ? ' is-open' : ''}`} aria-label={open ? 'Закрыть меню' : 'Открыть меню'} aria-controls="mobile-menu" aria-expanded={open} type="button" onClick={() => setOpen(v => !v)}><span /><span /></button>
      </header>
      <nav ref={menuRef} id="mobile-menu" className="mobile-menu" aria-label="Мобильное меню" hidden={!open}>
        {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
        <span className="mobile-menu-caption">Я ТАЛАНТЛИВ / 2026</span>
      </nav>
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer dark-section">
      <Mark footer />
      <span className="footer-slash" aria-hidden="true">/</span>
      <p>ФЕСТИВАЛЬ<br />ТВОРЧЕСТВА 2026</p>
      <nav aria-label="Меню в подвале">{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
      <a className="to-top" href="#top"><span>НАВЕРХ</span><span aria-hidden="true">↑</span></a>
      <small>Авторский дизайн-концепт · Демо-данные и вымышленные контакты отмечены в макете · Неофициальный сайт. <a href="https://www.rbologoe.ru/about/info/anounces/11182/" target="_blank" rel="noopener noreferrer">Источник реальных сведений ↗</a></small>
    </footer>
  );
}
