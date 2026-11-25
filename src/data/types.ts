export type Ink = 'cornflower' | 'paprika' | 'turquoise' | 'violet';

/** An image in /public. Leave `image` off an entry to show a placeholder box instead. */
export interface Img {
  type?: 'image';
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

/**
 * A looping, muted, decorative video in /public (no sound, no controls).
 * `poster` shows while it loads, and stays put for anyone who has
 * "reduce motion" turned on.
 */
export interface Video {
  type: 'video';
  src: string;
  poster?: string;
}

/** Anything that can fill an image slot. */
export type Media = Img | Video;

export interface ShopLink {
  url: string;
  label: string;
}

export interface Issue {
  id: string;
  /** Small label above the title, e.g. "Summer 2026" or "Coming soon". */
  kicker: string;
  title: string;
  blurb?: string;
  ink: Ink;
  image?: Media;
  /** Text shown in the placeholder box when there is no image. */
  placeholder: string;
  price?: string;
  shop?: ShopLink;
}

export interface Subscription {
  kicker: string;
  title: string;
  blurb: string;
  price: string;
  shop: ShopLink;
  image?: Media;
  placeholder: string;
  note?: string;
}

export interface Project {
  id: string;
  title: string;
  details: string;
  inks: string;
  price?: string;
  ink: Ink;
  image?: Media;
  placeholder: string;
  url?: string;
}

export interface Printable {
  id: string;
  title: string;
  details: string;
  /** Path to a PDF in /public/downloads. */
  file: string;
  ink: Ink;
  image?: Media;
  placeholder: string;
}

export interface Species {
  common: string;
  latin: string;
  /** id of the matching <h2> in the field notes, if there is one. */
  anchor?: string;
}