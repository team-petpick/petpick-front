import type { SVGProps } from 'react';
const SvgThreeDotIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 26 24"
    {...props}
  >
    <path fill="#F5F5F5" d="M0 0h26v24H0z" />
    <g clipPath="url(#ThreeDotIcon_svg__a)">
      <path fill="#DDD" d="M-6646-287H3427v6028H-6646z" />
      <path fill="url(#ThreeDotIcon_svg__b)" d="M-409-135h1907.64V945H-409z" />
      <g filter="url(#ThreeDotIcon_svg__c)">
        <path fill="#fff" d="M-346-135H44V945h-390z" />
      </g>
      <path fill="#fff" d="M-346-16.5H44v120h-390v-120Z" />
      <path
        fill="#404040"
        d="M7.583 12c0 .53-.228 1.04-.634 1.414A2.262 2.262 0 0 1 5.417 14c-.575 0-1.126-.21-1.532-.586A1.925 1.925 0 0 1 3.25 12c0-.53.228-1.04.635-1.414A2.262 2.262 0 0 1 5.417 10c.574 0 1.125.21 1.532.586.406.375.634.884.634 1.414Zm7.584 0c0 .53-.229 1.04-.635 1.414A2.262 2.262 0 0 1 13 14c-.575 0-1.126-.21-1.532-.586A1.925 1.925 0 0 1 10.833 12c0-.53.229-1.04.635-1.414A2.262 2.262 0 0 1 13 10c.575 0 1.126.21 1.532.586.406.375.635.884.635 1.414Zm7.583 0c0 .53-.228 1.04-.635 1.414a2.261 2.261 0 0 1-1.532.586c-.574 0-1.125-.21-1.532-.586A1.925 1.925 0 0 1 18.417 12c0-.53.228-1.04.634-1.414A2.261 2.261 0 0 1 20.583 10c.575 0 1.126.21 1.532.586.407.375.635.884.635 1.414Z"
      />
    </g>
    <defs>
      <clipPath id="ThreeDotIcon_svg__a">
        <path fill="#fff" d="M-6646-287H3427v6028H-6646z" />
      </clipPath>
      <pattern
        id="ThreeDotIcon_svg__b"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#ThreeDotIcon_svg__d" transform="matrix(.00081 0 0 .00143 -.018 0)" />
      </pattern>
      <filter
        id="ThreeDotIcon_svg__c"
        width={410}
        height={1100}
        x={-351}
        y={-141}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={5}
          result="effect1_dropShadow_0_1"
        />
        <feOffset dx={5} dy={4} />
        <feGaussianBlur stdDeviation={2.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
      </filter>
      <image
        id="ThreeDotIcon_svg__d"
        width={1277}
        height={698}
        data-name="image.png"
      />
    </defs>
  </svg>
);
export default SvgThreeDotIcon;