import * as React from "react"


// website Logo

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={148}
      height={45}
      viewBox="0 0 148 45"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_d)">
        <path
          d="M22 41.8c10.934 0 19.8-8.865 19.8-19.8S32.934 2.2 22 2.2C11.063 2.2 2.2 11.065 2.2 22S11.063 41.8 22 41.8z"
          fill="#fff"
        />
      </g>
      <path
        d="M27.212 28.888a8.6 8.6 0 01-5.215 1.752c-1.97 0-3.783-.66-5.236-1.77l-4.392 4.344a14.722 14.722 0 009.628 3.57 14.72 14.72 0 009.592-3.54l-4.377-4.356z"
        fill="#00B2FF"
      />
      <path
        d="M30.384 19.918a8.652 8.652 0 01-1.474 7.264l4.377 4.357a14.788 14.788 0 003.495-9.54c0-2.39-.582-4.724-1.667-6.812l-4.731 4.73z"
        fill="#FF4F42"
      />
      <path
        d="M15.068 27.163a8.64 8.64 0 0110.769-12.901l4.462-4.463a14.652 14.652 0 00-8.302-2.582C13.887 7.217 7.213 13.89 7.213 22c0 3.488 1.238 6.851 3.465 9.504l4.39-4.342z"
        fill="#17C22E"
      />
      <path
        d="M21.148 25.555c-.385 0-.77-.146-1.063-.44l-2.904-2.904a1.503 1.503 0 112.126-2.125l1.84 1.84 11.748-11.747a1.503 1.503 0 112.126 2.126l-12.81 12.81c-.294.294-.679.44-1.063.44z"
        fill="#34393D"
      />
      <path
        d="M55.072 29.23h3.354V19.175h4.472v-3.319L50.6 15.824v3.351h4.472V29.23zM71.843 26.996l-3.355-4.447v6.681h-3.354V15.824l2.236.032 4.473 5.554 4.472-5.554 2.236-.032V29.23h-3.354v-6.68l-3.354 4.446zM90.85 23.644h-5.59v2.745h7.826v2.874h-11.18V15.824h11.18v2.793h-7.827v2.793h5.59v2.234z"
        fill="#212529"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M115.447 25.879h-2.236v3.384h-3.355V15.824h6.15c3.354 0 5.59 1.67 5.59 5.027 0 2.23-1.677 3.91-2.795 4.47l3.354 3.91h-3.913l-2.795-3.352zm2.795-5.028c0-1.675-1.118-2.234-2.795-2.234h-2.236v4.443l2.236.026c1.677 0 2.795-.559 2.795-2.235z"
        fill="#212529"
      />
      <path
        d="M125.509 29.23V15.824h3.354V29.23h-3.354zM103.148 29.263h-3.354V19.208h-4.472v-3.352h12.298v3.352h-4.472v10.055zM145.09 27.186a7.297 7.297 0 01-5.531 2.513c-4.013 0-7.266-3.2-7.266-7.15 0-3.948 3.253-7.15 7.266-7.15a7.3 7.3 0 015.53 2.512l-2.579 2.1c-.701-.887-1.762-1.452-2.95-1.452-2.112 0-3.825 1.787-3.825 3.99 0 2.204 1.713 3.991 3.825 3.991 1.188 0 2.25-.566 2.952-1.453l2.578 2.099z"
        fill="#212529"
      />
      <defs>
        <filter
          id="filter0_d"
          x={0.199219}
          y={0.699951}
          width={43.6}
          height={43.6}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={0.5} />
          <feGaussianBlur stdDeviation={1} />
          <feColorMatrix values="0 0 0 0 0.0578824 0 0 0 0 0.109333 0 0 0 0 0.160784 0 0 0 0.32 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgComponent
