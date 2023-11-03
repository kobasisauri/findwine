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
        d="M3.5 8.16602L10.5 4.66602L17.5 8.16602L24.5 4.66602V19.8327L17.5 23.3327L10.5 19.8327L3.5 23.3327V8.16602Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5 4.66602V19.8327"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5 8.16602V23.3327"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

export default SvgComponent;
