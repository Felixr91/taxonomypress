import type { Printable } from './types';

/*
  EDITOR: free PDFs on the home page.
  Put each PDF in public/downloads and match the `file` path.
*/
export const printables: Printable[] = [
  {
    id: 'printable-01',
    title: 'Printable 01 title',
    details: 'PDF / 1 page / Letter',
    file: '/downloads/printable-01.pdf',
    ink: 'turquoise',
    placeholder: 'Printable 01 preview',
  },
  {
    id: 'printable-02',
    title: 'Printable 02 title',
    details: 'PDF / 1 page / Letter',
    file: '/downloads/printable-02.pdf',
    ink: 'violet',
    placeholder: 'Printable 02 preview',
  },
];
