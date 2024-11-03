import type { SVGProps } from 'react';
const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="delete_svg__ng-close"
    viewBox="0 0 16 16"
    {...props}
  >
    <defs>
      <clipPath id="delete_svg__a">
        <rect width={16} height={16} rx={0} />
      </clipPath>
    </defs>
    <g clipPath="url(#delete_svg__a)">
      <path
        fill="#212427"
        fillOpacity={0.502}
        d="m8.786 7.981 4.609-4.585a.555.555 0 1 0-.784-.789l-4.61 4.586L3.43 2.61a.556.556 0 0 0-.788.786l4.57 4.583-4.608 4.583a.555.555 0 1 0 .784.788l4.608-4.584 4.612 4.626a.553.553 0 0 0 .787.001.556.556 0 0 0 0-.786z"
      />
    </g>
  </svg>
);
export default SvgDelete;
