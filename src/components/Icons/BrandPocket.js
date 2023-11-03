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
        d="M5.83333 4.66602H22.1667C22.7855 4.66602 23.379 4.91185 23.8166 5.34943C24.2542 5.78702 24.5 6.38051 24.5 6.99935V13.9993C24.5 16.7841 23.3938 19.4548 21.4246 21.424C19.4555 23.3931 16.7848 24.4994 14 24.4994C11.2152 24.4994 8.54451 23.3931 6.57538 21.424C4.60625 19.4548 3.5 16.7841 3.5 13.9993V6.99935C3.5 6.38051 3.74583 5.78702 4.18342 5.34943C4.621 4.91185 5.21449 4.66602 5.83333 4.66602"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.3335 12.834L14.0002 17.5007L18.6668 12.834"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

export default SvgComponent;
