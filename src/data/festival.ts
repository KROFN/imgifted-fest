export type Direction = {
  id: string;
  name: string;
  date: string;
  compactDay: string;
  month: string;
  visual: string;
  note: string;
  texture: string;
};

// Only festival direction names and date groups confirmed in the source concept.
// No fabricated hours, competition outcomes, venue details, or registration URLs.
export const directions: readonly Direction[] = [
  { id: '01', name: 'Литературное чтение', date: '26–27 янв', compactDay: '26–27', month: 'янв', visual: 'Типографская бумага', note: 'Слово и выразительное чтение', texture: '/assets/material-01.webp' },
  { id: '02', name: 'Танцевальное творчество', date: '28 янв', compactDay: '28', month: 'янв', visual: 'Движение', note: 'Движение и сценический ритм', texture: '/assets/material-02.webp' },
  { id: '03', name: 'Вокальное творчество', date: '29 янв', compactDay: '29', month: 'янв', visual: 'Микрофонная сетка', note: 'Голос и музыкальное исполнение', texture: '/assets/material-03.webp' },
  { id: '04', name: 'Медиа, дизайн и музыка', date: '30–31 янв', compactDay: '30–31', month: 'янв', visual: 'Нотный лист', note: 'Звук, изображение и новые медиа', texture: '/assets/material-04.webp' },
  { id: '05', name: 'Театр моды и арт', date: '02 фев', compactDay: '02', month: 'фев', visual: 'Фактура ткани', note: 'Ткань, костюм и визуальный образ', texture: '/assets/material-05.webp' },
  { id: '06', name: 'Театральное творчество', date: '03 фев', compactDay: '03', month: 'фев', visual: 'Сценический занавес', note: 'Сцена и драматическое действие', texture: '/assets/material-06.webp' },
  { id: '07', name: 'Фото и техническое творчество', date: '04–05 фев', compactDay: '04–05', month: 'фев', visual: 'Плёнка и чертёж', note: 'Кадр и технический эксперимент', texture: '/assets/material-07.webp' },
];

export type PanelKey = 'registration' | 'ages' | 'rules' | 'contacts';

// Official announcement: https://www.rbologoe.ru/about/info/anounces/11182/
// Announced 14 Jan 2026 by the Bologovsky municipal administration.
export const officialFestivalInfo = {
  minimumAge: 4,
  nominationCount: 12,
  registrationDeadline: '22 января 2026',
  competitionDates: '26 января — 6 февраля 2026',
  galaDate: '13 февраля 2026',
  announcementUrl: 'https://www.rbologoe.ru/about/info/anounces/11182/',
} as const;

export const questions = [
  {
    q: 'Кто мог выйти на сцену?',
    a: 'Участники от четырёх лет: самостоятельно, в творческом коллективе или вместе с семьёй. В XVI фестивале были предусмотрены очные и дистанционные форматы.',
  },
  {
    q: 'Какие направления представлены?',
    a: 'Официальная программа включала 12 номинаций. Для удобства этого дизайн-концепта мы объединили их в семь крупных тематических направлений: литература, танец, вокал, медиа и музыка, мода и арт, театр, фото и техническое творчество.',
  },
  {
    q: 'Когда проходил фестиваль?',
    a: 'Приём заявок завершился 22 января 2026 года. Конкурсная программа проходила 26 января — 6 февраля, гала-концерт был запланирован на 13 февраля 2026 года.',
  },
  {
    q: 'Как готовить номер или конкурсную работу?',
    a: 'В сценических направлениях полезно заранее подготовить название номера, состав участников, музыкальное сопровождение и технические пожелания. Для творческих работ — название, файл или фотографию и короткое описание. Это пример подготовки, не официальный регламент.',
  },
  {
    q: 'Где посмотреть результаты и условия?',
    a: 'Раздел с итогами и файлами положения можно предусмотреть в полноценной версии сайта. Здесь показана визуальная концепция программы прошедшего фестиваля; официальные итоги и документы не заменяются макетными данными.',
  },
] as const;
