import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg width={35} height={35} viewBox="0 0 35 35" fill="none" {...props}>
    <Path
      d="M4.375 24.7005H30.625M4.375 17.4089H30.625M4.375 10.1172H30.625"
      stroke={props.color || "#F2F2F2"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;
