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
      d="M12 2.055c-5.523 0-10 4.478-10 10 0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-10-10Zm0 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-3a1 1 0 0 0 1-1v-5a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1Z"
      fill="#FF4842"
    />
  </Svg>
);

export default SvgComponent;
