import type { Issue, Subscription } from './types';

/*
  EDITOR: one entry per issue, newest first.
  - Add `image` when the cover is ready (put the file in public/img).
  - Add `price` to show a price line.
  - Add `shop` when the product page is live.
*/
export const issues: Issue[] = [
  {
    id: 'winter',
    kicker: 'Coming soon',
    title: 'Winter Floral Observer',
    ink: 'cornflower',
    placeholder: 'Winter cover',
  },
  {
    id: 'fall',
    kicker: 'Fall',
    title: 'Collaborative Navigation',
    blurb: 'Hawk watching, mushroom foraging, seed scattering, and getting the garden ready for the cold.',
    ink: 'paprika',
    image: {
      src: '/img/floralobserverfall2026cropped.jpg',
      alt: 'Cover of the Fall Floral Observer, Collaborative Navigation',
    },
    placeholder: 'Fall cover',
    shop: { url: 'https://shop.taxonomypress.com/product/fall-floral-observer-preorder', label: 'Shop Fall' },
  },
  {
    id: 'summer-2026',
    kicker: 'Summer 2026',
    title: 'Wet and Wild',
    blurb: 'Bodies of water, wetlands, and shorebirds, with foraged jam recipes, comics, and puzzles.',
    ink: 'turquoise',
    image: { src: '/img/summer2026.webp', alt: 'Cover of the Summer 2026 Floral Observer, Wet and Wild' },
    placeholder: 'Summer cover',
    shop: { url: 'https://shop.taxonomypress.com/product/summer-floral-observer-preorder', label: 'Shop Summer' },
  },
  {
    id: 'spring-2026',
    kicker: 'Spring 2026',
    title: 'Emerging and Revealing',
    blurb: 'Birding comics, shopping for flowers ethically, neighborhood whale watching, recipes, and puzzles.',
    ink: 'violet',
    image: { src: '/img/spring2026.webp', alt: 'Cover of the Spring 2026 Floral Observer, Emerging and Revealing' },
    placeholder: 'Spring cover',
    shop: {
      url: 'https://shop.taxonomypress.com/product/pre-order-spring-floral-observer-2026',
      label: 'Shop Spring',
    },
  },
];

export const subscription: Subscription = {
  kicker: 'Subscription',
  title: 'Floral Observer 2027',
  blurb: 'All four 2027 seasonal issues, mailed to your door with printed extras tucked inside.',
  price: '$60.00 for the year',
  shop: { url: 'https://shop.taxonomypress.com/product/floral-observer-subscription-2027', label: 'Subscribe for 2027' },
  image: { src: '/img/floralobservermain1.jpg', alt: 'Issues of the Floral Observer newspaper' },
  placeholder: 'Subscription image',
  // note: 'Earlier editions and the 2026 subscription are sold out.',
};
