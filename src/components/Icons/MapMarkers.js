import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    {...props}
  >
    <Path
      d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z"
      fill="white"
    />
    <Path
      d="M11 20.5C16.2467 20.5 20.5 16.2467 20.5 11C20.5 5.7533 16.2467 1.5 11 1.5C5.7533 1.5 1.5 5.7533 1.5 11C1.5 16.2467 5.7533 20.5 11 20.5Z"
      fill="url(#paint0_linear_1632_3742)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1632_3742"
        x1="11"
        y1="1.5"
        x2="11"
        y2="20.5"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D1623F" />
        <Stop offset="1" stopColor="#A8320D" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgComponent;
