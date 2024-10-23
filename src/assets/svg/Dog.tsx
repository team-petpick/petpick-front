import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDog = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17" {...props}>
    <path fill="#101010" d="M0 16.12h16v-16H0z" />
  </svg>
);
export default SvgDog;
