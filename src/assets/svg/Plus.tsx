import type { SVGProps } from 'react';
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" {...props}>
    <path fill="#333" d="M16 10v4h4v2h-4v4h-2v-4h-4v-2h4v-4z" />
  </svg>
);
export default SvgPlus;
