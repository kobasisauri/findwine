import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 5.4V23L8.31818 18.6L16.6818 23L24 18.6V1L16.6818 5.4L8.31818 1L1 5.4Z"
      stroke={props.color || "#B0B1B4"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.31863 1V18.6"
      stroke={props.color || "#B0B1B4"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.6819 5.40039V23.0004"
      stroke={props.color || "#B0B1B4"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;
