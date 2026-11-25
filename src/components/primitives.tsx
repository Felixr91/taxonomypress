import { useEffect, useRef, useState, type ReactNode } from 'react';
import type { Ink, Media, Video } from '../data/types';

/** Sets the page <title> and description (React 19 moves these into <head>). */
export function PageMeta({ title, description }: { title: string; description: string }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
}

/** Riso misregistration effect: the text plus an offset copy behind it. */
export function Overprint({ children, ink }: { children: ReactNode; ink?: Ink }) {
  return (
    <span className={ink ? `overprint overprint--${ink}` : 'overprint'}>
      {children}
      <span className="overprint__shadow" aria-hidden="true">
        {children}
      </span>
    </span>
  );
}

function usePrefersReducedMotion() {
  const query = '(prefers-reduced-motion: reduce)';
  const [reduced, setReduced] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

/** Decorative looping video. Holds on the poster frame when the visitor prefers reduced motion. */
function LoopingVideo({ video }: { video: Video }) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) el.pause();
    else el.play().catch(() => { });
  }, [reduced]);

  return (
    <video
      ref={ref}
      className="media-video"
      autoPlay={!reduced}
      muted
      loop
      playsInline
      preload="metadata"
      poster={video.poster}
      aria-hidden="true"
    >
      <source src={video.src} type="video/mp4" />
    </video>
  );
}

/** Renders an image or a video. Use `{ type: 'video', src, poster }` for video. */
export function MediaSlot({ media }: { media: Media }) {
  if (media.type === 'video') return <LoopingVideo video={media} />;
  return <img src={media.src} alt={media.alt} width={media.width} height={media.height} loading="lazy" />;
}

/** Shows the image or video if there is one, otherwise a dashed placeholder box. */
export function ImageSlot({ image, placeholder }: { image?: Media; placeholder: string }) {
  if (image) return <MediaSlot media={image} />;
  return <div className="img-placeholder label label--muted">{placeholder}</div>;
}

/** Ink-tinted frame. `cover` makes an image fill the whole plate, edge to edge. */
export function Plate({ ink, cover, children }: { ink: Ink; cover?: boolean; children: ReactNode }) {
  return <div className={`plate plate--${ink}${cover ? ' plate--cover' : ''}`}>{children}</div>;
}

interface MetaItem {
  term: string;
  value: ReactNode;
}

/** The thin-ruled row of facts under a page title. */
export function MetaRow({
  items,
  cellClassName = 'span-sm-2 span-md-3 span-lg-3',
}: {
  items: MetaItem[];
  cellClassName?: string;
}) {
  return (
    <dl className="grid meta">
      {items.map((item) => (
        <div key={item.term} className={`cell ${cellClassName}`}>
          <dt className="label label--muted">{item.term}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function InstagramIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" className="icon__fill" />
    </svg>
  );
}