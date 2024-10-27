import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMap = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M36 36H0V0h36z" />
      <g stroke="#333" strokeLinejoin="round" strokeWidth={1.7} transform="translate(8.7 6)">
        <path
          strokeLinecap="round"
          d="M9.306 24S0 16.544 0 9.306a9.306 9.306 0 0 1 18.612 0C18.612 16.544 9.306 24 9.306 24"
        />
        <circle cx={9.212} cy={9.123} r={2.784} strokeLinecap="square" />
      </g>
    </g>
  </svg>
);
export default SvgMap;
