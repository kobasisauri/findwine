import Svg, { Path, Defs, ClipPath, Rect, G } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg width={28} height={28} viewBox="0 0 28 28" fill="none" {...props}>
    <Defs>
      <ClipPath id="clip0">
        <Rect width="28" height="28" fill="white" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#clip0)">
      <Path
        d="M9.3335 24.5H18.6668"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 19.834V24.5007"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.1665 4.66602H19.8332"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.8332 4.66602V13.9993C19.8332 15.5464 19.2186 17.0302 18.1246 18.1241C17.0307 19.2181 15.5469 19.8327 13.9998 19.8327C12.4527 19.8327 10.969 19.2181 9.87505 18.1241C8.78109 17.0302 8.1665 15.5464 8.1665 13.9993V4.66602"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.83333 12.8327C7.122 12.8327 8.16667 11.788 8.16667 10.4993C8.16667 9.21068 7.122 8.16602 5.83333 8.16602C4.54467 8.16602 3.5 9.21068 3.5 10.4993C3.5 11.788 4.54467 12.8327 5.83333 12.8327Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.1668 12.8327C23.4555 12.8327 24.5002 11.788 24.5002 10.4993C24.5002 9.21068 23.4555 8.16602 22.1668 8.16602C20.8782 8.16602 19.8335 9.21068 19.8335 10.4993C19.8335 11.788 20.8782 12.8327 22.1668 12.8327Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

export default SvgComponent;
