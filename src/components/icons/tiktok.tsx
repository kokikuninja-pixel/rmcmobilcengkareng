import { createElement } from 'react';

export function Tiktok({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    ...props,
  }, [
    createElement('path', {
      key: 'music-note',
      d: 'M12 2v20',
    }),
    createElement('path', {
      key: 'curve-top',
      d: 'M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
    }),
  ]);
}