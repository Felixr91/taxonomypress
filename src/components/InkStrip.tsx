import type { CSSProperties } from 'react';
import type { HouseInk } from '../data/inks';
import { cardSpan } from './grid';

/** Row of ink swatches. Pass in the list from src/data/inks.ts. */
export function InkStrip({ inks, label = 'House inks' }: { inks: HouseInk[]; label?: string }) {
  return (
    <section className="grid" aria-label={label}>
      {inks.map((ink, i) => (
        <div key={ink.name} className={`cell ${cardSpan(i, inks.length, { sm: 2, md: 3, lg: 4 })} swatch`}>
          <div className="swatch__chip" style={{ '--chip': ink.hex } as CSSProperties} />
          <p className="label label--muted">Ink {String(i + 1).padStart(2, '0')}</p>
          <p className="swatch__name">{ink.name}</p>
        </div>
      ))}
    </section>
  );
}
