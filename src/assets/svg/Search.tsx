import type { SVGProps } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M24 24H6V6h18z" />
      <path d="M22.5 22.5h-15v-15h15z" />
      <path
        stroke="#333"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M18.825 13.352c0 1.725-.75 3.225-1.95 4.2-.975.825-2.175 1.275-3.525 1.275a5.457 5.457 0 0 1-5.475-5.475 5.457 5.457 0 0 1 5.475-5.475c3-.075 5.475 2.4 5.475 5.475zm2.55 8.023-3.75-3.75"
      />
    </g>
  </svg>
);
export default SvgSearch;
