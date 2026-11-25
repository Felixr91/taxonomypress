import { useId, type ReactNode } from 'react';
import type { Img } from '../data/types';
import { Overprint } from './primitives';

interface CtaSectionProps {
  id?: string;
  /** Small numbered label in the left column, e.g. "§ 01 / Newsletter". */
  kicker: string;
  title: string;
  /**
   * Optional illustration under the kicker in the left column.
   * Leave `alt` empty ('') when it's decorative.
   */
  image?: Img;
  /** Body copy under the title. */
  children?: ReactNode;
  /** Button(s) under the body copy. */
  action?: ReactNode;
  /** Extra grid cells after the heading row, e.g. cards. */
  cards?: ReactNode;
}

/** Label column on the left, heading + copy + button on the right. */
export function CtaSection({ id, kicker, title, image, children, action, cards }: CtaSectionProps) {
  const titleId = useId();
  return (
    <section id={id} className="grid" aria-labelledby={titleId}>
      <div className="cell span-md-2 span-lg-3 section-head">
        <p className="label">{kicker}</p>
        {image && (
          <img
            className="section-head__image"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
          />
        )}
      </div>
      <div className="cell cell--loose span-md-4 span-lg-9 cta">
        <h2 id={titleId} className="display">
          {title}
        </h2>
        {children}
        {action}
      </div>
      {cards}
    </section>
  );
}

interface PageHeroProps {
  /** Image, video, or placeholder in the left column. */
  media: ReactNode;
  title: ReactNode;
  deck?: ReactNode;
}

/** Article-style page header used on Floral Observer, Open Call and Submit. */
export function PageHero({ media, title, deck }: PageHeroProps) {
  return (
    <header className="grid">
      <div className="cell cell--flush span-md-6 span-lg-3">{media}</div>
      <div className="cell cell--loose span-md-6 span-lg-9 article-head">
        <h1 className="display">
          <Overprint ink="paprika">{title}</Overprint>
        </h1>
        {deck && <p className="deck">{deck}</p>}
      </div>
    </header>
  );
}