import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h32v32H0z" />
      <path
        fill="#333"
        fillRule="nonzero"
        d="m10.952 23.384 2.096 2.146 10.055-9.825-9.701-10.278-2.182 2.06 7.677 8.133z"
      />
    </g>
  </svg>
);
export default SvgRightArrow;
