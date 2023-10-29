import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Path
      d="M25 26C25 22.6249 20.5228 19.8889 15 19.8889C9.47715 19.8889 5 22.6249 5 26M15 16.2222C11.5482 16.2222 8.75 13.4862 8.75 10.1111C8.75 6.73604 11.5482 4 15 4C18.4518 4 21.25 6.73604 21.25 10.1111C21.25 13.4862 18.4518 16.2222 15 16.2222Z"
      stroke={props.color || "#3A3D43"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;
