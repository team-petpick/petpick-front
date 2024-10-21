import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M36 36H0V0h36z" />
      <g
        stroke="#333"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.7}
        transform="translate(5.164 6.547)"
      >
        <path d="m25.68 3.66-2.72 11.57H7.37L4.66 3.66z" />
        <circle cx={20.52} cy={20.78} r={2.14} />
        <circle cx={9.81} cy={20.78} r={2.14} />
        <path d="M0 0h3.8l1.76 7.5" />
      </g>
    </g>
  </svg>
);
export default SvgCart;
