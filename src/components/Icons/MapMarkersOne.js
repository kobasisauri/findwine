import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="14"
    viewBox="0 0 15 14"
    fill="none"
    {...props}
  >
    <Path
      d="M7.293 13.9245C11.0468 13.9245 14.0899 10.998 14.0899 7.38801C14.0899 3.77803 11.0468 0.851562 7.293 0.851562C3.53917 0.851562 0.496094 3.77803 0.496094 7.38801C0.496094 10.998 3.53917 13.9245 7.293 13.9245Z"
      fill="#CF552F"
      fill-opacity="0.24"
    />
    <Path
      d="M7.29304 10.7444C9.22068 10.7444 10.7833 9.24158 10.7833 7.3878C10.7833 5.53403 9.22068 4.03125 7.29304 4.03125C5.3654 4.03125 3.80273 5.53403 3.80273 7.3878C3.80273 9.24158 5.3654 10.7444 7.29304 10.7444Z"
      fill="url(#paint0_linear_1525_2318)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1525_2318"
        x1="7.29304"
        y1="4.03125"
        x2="7.29304"
        y2="10.7444"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F0724B" />
        <Stop offset="1" stopColor="#A8320D" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgComponent;
