export default function HeroSvg() {
  return (
    <div className="hero-fig">
      <svg
        viewBox="0 0 560 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M484.75 145.25L306.25 281.75L465.5 441C502.25 397.25 525 341.25 525 280C525 229.25 509.25 183.75 484.75 145.25Z"
          fill="#0c0c0a"
        />
        <path
          d="M297.5 245L462 117.25C420 71.75 362.25 40.25 297.5 35V245Z"
          fill="#f1ece1"
          stroke="#0c0c0a"
          strokeWidth="3"
        />
        <path
          d="M267.75 292.25C266 290.5 266 290.5 267.75 292.25C266 290.5 266 288.75 266 288.75C266 287 264.25 287 264.25 285.25C264.25 283.5 264.25 283.5 264.25 281.75V280V36.75C134.75 45.5 35 150.5 35 280C35 414.75 145.25 525 280 525C341.25 525 397.25 502.25 441 465.5L267.75 292.25Z"
          fill="#95FF00"
          stroke="#0c0c0a"
          strokeWidth="3"
        />
        <g textAnchor="middle">
          <text
            x="180"
            y="380"
            fontFamily="TT Octosquares, sans-serif"
            fontSize="56"
            fontWeight="800"
            fill="#0c0c0a"
            letterSpacing="-3"
          >
            68%
          </text>
          <text
            x="180"
            y="410"
            fontFamily="Space Grotesk, sans-serif"
            fontSize="11"
            fontWeight="600"
            fill="#0c0c0a"
            letterSpacing="2.5"
          >
            ESSENTIALS
          </text>
          <text
            x="370"
            y="130"
            fontFamily="TT Octosquares, sans-serif"
            fontSize="22"
            fontWeight="700"
            fill="#0c0c0a"
            letterSpacing="-0.5"
          >
            17%
          </text>
          <text
            x="370"
            y="150"
            fontFamily="Space Grotesk, sans-serif"
            fontSize="9"
            fontWeight="600"
            fill="#0c0c0a"
            letterSpacing="2"
          >
            SAVED
          </text>
          <text
            x="438"
            y="305"
            fontFamily="TT Octosquares, sans-serif"
            fontSize="22"
            fontWeight="700"
            fill="#f1ece1"
            letterSpacing="-0.5"
          >
            15%
          </text>
          <text
            x="438"
            y="325"
            fontFamily="Space Grotesk, sans-serif"
            fontSize="9"
            fontWeight="600"
            fill="#f1ece1"
            letterSpacing="2"
          >
            EXTRA
          </text>
        </g>
      </svg>
      <div className="hero-fig-stamp">
        Avg. saver
        <small>+ €240 / mo</small>
      </div>
    </div>
  );
}
