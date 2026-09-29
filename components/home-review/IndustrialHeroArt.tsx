import s from "./review.module.css";

// Decorative process-control line art; no labels or technical claims.
export default function IndustrialHeroArt() {
  return (
    <svg
      className={s.heroArt}
      viewBox="0 0 440 520"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern
          id="review-hero-grid"
          width="28"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M28 0H0V28"
            stroke="#658389"
            strokeOpacity=".13"
            strokeWidth="1"
          />
        </pattern>
        <linearGradient
          id="review-hero-pipe"
          x1="0"
          y1="0"
          x2="440"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8a302f" stopOpacity=".15" />
          <stop offset=".5" stopColor="#8a302f" stopOpacity=".78" />
          <stop offset="1" stopColor="#547d82" stopOpacity=".58" />
        </linearGradient>
      </defs>
      <rect
        x="22"
        y="18"
        width="396"
        height="480"
        rx="26"
        fill="url(#review-hero-grid)"
      />
      <g stroke="#658389" strokeOpacity=".45" strokeWidth="1">
        <path d="M44 34h72M44 44h38M324 474h72M358 484h38" />
        <path d="M59 74v272M368 180v98" strokeDasharray="4 9" />
        <circle cx="59" cy="74" r="3" fill="#658389" />
        <circle cx="368" cy="278" r="3" fill="#658389" />
      </g>
      <g className={s.heroArtGauge} stroke="#8a302f" strokeWidth="2">
        <circle cx="288" cy="118" r="69" strokeOpacity=".45" />
        <circle cx="288" cy="118" r="54" strokeOpacity=".7" />
        <path
          d="M239 118a49 49 0 0 1 98 0"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          className={s.heroGaugeNeedle}
          d="M288 118l25-29"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="288" cy="118" r="5" fill="#8a302f" />
        <path
          d="M288 49v-9M337 69l7-7M239 69l-7-7M342 118h9M225 118h9"
          strokeLinecap="round"
        />
      </g>
      <g
        stroke="url(#review-hero-pipe)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M-10 318h101v-51h67v51h273" />
        <path d="M288 187v81" strokeWidth="5" />
        <path d="M368 318v85h70" strokeWidth="5" />
      </g>
      <g stroke="#8a302f" strokeWidth="2.5" strokeLinejoin="round">
        <path
          d="M171 296l30 22-30 22v-44Zm60 0-30 22 30 22v-44Z"
          fill="#f7e9e1"
          fillOpacity=".55"
        />
        <path d="M201 296v-24h25" />
        <circle cx="229" cy="272" r="5" fill="#8a302f" fillOpacity=".3" />
      </g>
      <g stroke="#547d82" strokeWidth="2">
        <rect
          x="87"
          y="374"
          width="184"
          height="110"
          rx="13"
          fill="#eef6f3"
          fillOpacity=".32"
        />
        <path
          d="M106 438h24l12-22 15 37 17-28 13 13h62"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M107 398h79M107 406h43" strokeOpacity=".55" />
        <circle
          cx="239"
          cy="401"
          r="5"
          fill="#8a302f"
          fillOpacity=".45"
          stroke="none"
        />
        <path
          d="M91 362v-12M267 362v-12M91 491v12M267 491v12"
          strokeOpacity=".5"
        />
      </g>
      <path
        className={s.heroArtFlow}
        d="M17 318h71v-51h67v51h94"
        stroke="#fff9ef"
        strokeWidth="2.5"
        strokeDasharray="7 12"
        strokeLinecap="round"
      />
    </svg>
  );
}

// A complementary flow-metering sketch on the other side of the hero.
export function IndustrialHeroArtLeft() {
  return (
    <svg
      className={`${s.heroArt} ${s.heroArtLeft}`}
      viewBox="0 0 420 520"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern
          id="review-left-grid"
          width="28"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <path d="M28 0H0V28" stroke="#8a635c" strokeOpacity=".12" />
        </pattern>
        <linearGradient
          id="review-left-pipe"
          x1="0"
          y1="0"
          x2="420"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#547d82" stopOpacity=".55" />
          <stop offset=".52" stopColor="#8a302f" stopOpacity=".72" />
          <stop offset="1" stopColor="#8a302f" stopOpacity=".12" />
        </linearGradient>
      </defs>
      <rect
        x="17"
        y="18"
        width="386"
        height="484"
        rx="26"
        fill="url(#review-left-grid)"
      />
      <g stroke="#8a302f" strokeWidth="2" strokeOpacity=".6">
        <rect x="63" y="63" width="84" height="203" rx="20" />
        <rect x="169" y="87" width="72" height="179" rx="18" />
        <path
          d="M64 104h82M64 225h82M170 127h70M170 225h70"
          strokeOpacity=".4"
        />
        <path
          d="M105 63V39h100v48M106 266v44M205 266v44"
          strokeLinejoin="round"
        />
        <circle cx="105" cy="39" r="5" fill="#8a302f" fillOpacity=".32" />
        <circle cx="205" cy="87" r="5" fill="#8a302f" fillOpacity=".32" />
      </g>
      <g stroke="#547d82" strokeWidth="1.5" strokeOpacity=".65">
        <path d="M273 75h102M273 91h64M291 107h84M272 213h103M272 226h50" />
        <circle cx="316" cy="159" r="35" />
        <circle className={s.heroSensorRing} cx="316" cy="159" r="22" />
        <path d="M281 159h70M316 124v70" strokeOpacity=".45" />
        <circle cx="316" cy="159" r="5" fill="#547d82" fillOpacity=".5" />
      </g>
      <g
        stroke="url(#review-left-pipe)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M-8 311h126v50h140v-50h170" />
        <path d="M204 266v45M316 194v117" strokeWidth="5" />
      </g>
      <g stroke="#8a302f" strokeWidth="2">
        <rect
          x="138"
          y="330"
          width="100"
          height="61"
          rx="14"
          fill="#f6eee6"
          fillOpacity=".48"
        />
        <circle cx="188" cy="360" r="19" />
        <path
          d="M178 360h20M188 350v20M150 340h-18M244 340h-18"
          strokeOpacity=".5"
        />
        <path d="M166 391v15h44v-15" />
      </g>
      <g stroke="#547d82" strokeWidth="1.5">
        <path d="M37 448h38l14-18 17 35 16-21 16 4h87" strokeLinejoin="round" />
        <path d="M37 471h152M37 481h93" strokeOpacity=".45" />
        <circle cx="231" cy="448" r="5" fill="#547d82" fillOpacity=".42" />
      </g>
      <path
        className={s.heroArtFlow}
        d="M13 311h103v50h143v-50h97"
        stroke="#fff9ef"
        strokeWidth="2.5"
        strokeDasharray="7 12"
        strokeLinecap="round"
      />
    </svg>
  );
}
