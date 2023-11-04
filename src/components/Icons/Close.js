import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
      stroke="#222E2E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;
