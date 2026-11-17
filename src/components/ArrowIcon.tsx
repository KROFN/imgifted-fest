type Direction = 'up-right' | 'down-right' | 'up';

export function ArrowIcon({ direction = 'up-right' }: { direction?: Direction }) {
  const path =
    direction === 'up' ? 'M12 19V5m-7 7 7-7 7 7' :
    direction === 'down-right' ? 'M5 5l14 14M9 19h10V9' :
    'M5 19 19 5M9 5h10v10';
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
      fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square"
      strokeLinejoin="miter" focusable="false" aria-hidden="true">
      <path d={path}/>
    </svg>
  );
}
