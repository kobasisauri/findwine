import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width="24"
    height="25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 12.055a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm9.73 3.61 4.57-6v-.03a1.006 1.006 0 0 0-1.6-1.22l-3.78 5-1.63-2.08a1.001 1.001 0 0 0-1.58 1.23l2.44 3.11a1 1 0 0 0 .79.38 1 1 0 0 0 .79-.39Z"
      fill="#54D62C"
    />
  </Svg>
);

export default SvgComponent;
