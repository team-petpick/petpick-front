import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBell = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <g fill="none" fillRule="evenodd" stroke="#CCC" strokeWidth={1.6}>
      <path d="M12.666 23a3.333 3.333 0 1 0 6.666 0" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M25.998 22.738H6l.013-.03q.114-.202 1.186-1.709l.75-1.05v-6.635c0-4.485 3.438-8.14 7.741-8.308L16 5c4.446 0 8.05 3.722 8.05 8.314v6.634l1.707 2.411q.26.38.242.38z"
      />
    </g>
  </svg>
);
export default SvgBell;
