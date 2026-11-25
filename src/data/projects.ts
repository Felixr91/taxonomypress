import type { Project } from './types';

/*
  EDITOR: the four projects on the home page.
  Add `image` and `url` when ready, and fill in details, inks, and price.
*/
export const projects: Project[] = [
  {
    id: 'soup', title: 'Soup Library', details: 'Format / size', inks: 'Inks', ink: 'violet', placeholder: 'Soup image', image: {
      src: '/img/soupbook.jpg',
      alt: 'string',
      width: 200,
      height: 200,
    },
  },
  {
    id: 'tomato', title: 'Tomato Diary', details: 'Format / size', inks: 'Inks', ink: 'paprika', placeholder: 'Tomato image', image: {
      src: '/img/tomatobook.jpg',
      alt: 'string',
      width: 200,
      height: 200,
    }
  },
  // { id: 'couch', title: 'Couch', details: 'Format / size', inks: 'Inks', ink: 'turquoise', placeholder: 'Couch image' },
  {
    id: 'comics-anthology',
    title: 'Comics Anthology',
    details: 'Format / size',
    inks: 'Cornflower...',
    // price: '$00',
    ink: 'cornflower',
    placeholder: 'Anthology image',
    image: {
      src: '/img/CrossPolination.jpeg',
      alt: 'string',
      width: 200,
      height: 200,
    },
  },
];
