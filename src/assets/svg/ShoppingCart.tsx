import type { SVGProps } from 'react';
const SvgShoppingCart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" {...props}>
    <g clipPath="url(#shoppingCart_svg__a)">
      <path
        fill="#222"
        d="M20.82 3.737a2.743 2.743 0 0 0-2.11-.987H3.887l-.038-.322A2.75 2.75 0 0 0 1.12 0H.917a.917.917 0 1 0 0 1.833h.203a.917.917 0 0 1 .91.81l1.262 10.725a4.583 4.583 0 0 0 4.552 4.049h9.573a.917.917 0 0 0 0-1.834H7.844a2.75 2.75 0 0 1-2.585-1.833h10.927a4.584 4.584 0 0 0 4.51-3.77l.72-3.991a2.744 2.744 0 0 0-.596-2.252Zm-1.203 1.926-.72 3.991a2.75 2.75 0 0 1-2.711 2.263H4.967l-.862-7.334h14.604a.916.916 0 0 1 .908 1.08Z"
      />
      <path
        fill="#000"
        d="M6.417 22a1.833 1.833 0 1 0 0-3.667 1.833 1.833 0 0 0 0 3.667ZM15.583 22a1.833 1.833 0 1 0 0-3.667 1.833 1.833 0 0 0 0 3.667Z"
      />
    </g>
    <defs>
      <clipPath id="shoppingCart_svg__a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShoppingCart;
