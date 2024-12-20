import type { SVGProps } from 'react';
const SvgLike = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
    <path
      fill="none"
      stroke="#b5b5b5"
      strokeLinecap="round"
      strokeWidth={1.7}
      d="M28.927 8.893a6.46 6.46 0 0 0-9.139 0l-1.829 1.828-1.827-1.828a6.462 6.462 0 1 0-9.14 9.138L8.82 19.86l8.432 8.434a1 1 0 0 0 1.414 0l8.433-8.434h0l1.828-1.828a6.46 6.46 0 0 0 0-9.138z"
    />
  </svg>
);
export default SvgLike;
