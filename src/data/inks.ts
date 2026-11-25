/*
  EDITOR: the house inks shown in the ink strip on the home page.
  Add, remove, or reorder entries here. `hex` is the on-screen color.
  These start from the standard Riso ink reference colors; adjust any hex
  to match how your prints actually look.
*/
export interface HouseInk {
  name: string;
  hex: string;
}

export const inks: HouseInk[] = [
  { name: 'Cornflower', hex: '#62A8E5' },
  { name: 'Violet', hex: '#9D7AD2' },
  { name: 'Copper', hex: '#BD8C66' },
  { name: 'Paprika', hex: '#FF6C2F' },
  { name: 'Blue', hex: '#0078BF' },
  { name: 'Raspberry', hex: '#D2515E' },
  { name: 'Yellow', hex: '#FFE800' },
];
