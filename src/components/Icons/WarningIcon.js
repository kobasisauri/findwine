import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22.56 16.355l-7.67-12.72a3.43 3.43 0 0 0-5.78 0l-7.67 12.72a3 3 0 0 0-.05 3 3.37 3.37 0 0 0 2.94 1.7h15.34a3.37 3.37 0 0 0 2.94-1.66 3 3 0 0 0-.05-3.04zm-10.56.7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-3a1 1 0 0 0 1-1v-4a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1Z"
      fill="#FFC107"
    />
  </Svg>
);

export default SvgComponent;
