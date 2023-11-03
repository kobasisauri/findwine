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
        d="M14 17.5V24.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.8333 3.5L21 11.6667C21 15.1807 17.8663 17.5 14 17.5C10.1337 17.5 7 15.1807 7 11.6667L8.16667 3.5H19.8333Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 11.6664C8.0098 10.9093 9.23789 10.5 10.5 10.5C11.7621 10.5 12.9902 10.9093 14 11.6664C15.0098 12.4235 16.2379 12.8328 17.5 12.8328C18.7621 12.8328 19.9902 12.4235 21 11.6664"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

export default SvgComponent;
