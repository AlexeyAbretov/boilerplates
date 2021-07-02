/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-destructuring */
const breakpoints = [
  '320px',
  '547px',
  '576px',
  '767px',
  '768px',
  '992px',
  '1200px',
  '1440px',
];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints._2xl = breakpoints[5];
breakpoints._3xl = breakpoints[6];
breakpoints._4xl = breakpoints[7];

export const theme = {
  breakpoints,
};
