/*
  Card spans that always fill the grid.

  Picks how many cards go in a row (up to `max`) so the count divides evenly
  when it can: 3 items sit 3 across, 4 sit 4 across, 6 sit 3 + 3.
  If there's a leftover row (5 items, say), those cards widen to fill it.
  Works out each breakpoint separately: sm (4 col, optional), md (6 col), lg (12 col).
  Leave `sm` off to keep one card per row on small screens.
*/

const COLUMNS = { sm: 4, md: 6, lg: 12 } as const;

export interface MaxPerRow {
  sm?: number;
  md: number;
  lg: number;
}

function perRow(count: number, max: number) {
  if (count <= max) return Math.max(count, 1);
  for (let n = max; n >= 2; n--) {
    if (count % n === 0) return n;
  }
  return max;
}

function span(index: number, count: number, max: number, columns: number) {
  const n = perRow(count, max);
  const leftover = count % n;
  const inLastRow = leftover > 0 && index >= count - leftover;
  return columns / (inLastRow ? leftover : n);
}

/** Returns the span classes for the card at `index` in a list of `count`. */
export function cardSpan(index: number, count: number, max: MaxPerRow) {
  const classes = [
    `span-md-${span(index, count, max.md, COLUMNS.md)}`,
    `span-lg-${span(index, count, max.lg, COLUMNS.lg)}`,
  ];
  if (max.sm) classes.unshift(`span-sm-${span(index, count, max.sm, COLUMNS.sm)}`);
  return classes.join(' ');
}
