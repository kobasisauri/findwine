import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={32}
    viewBox="0 0 29 32"
    fill="none"
    {...props}
  >
    <Path
      d="M10.6667 24.625H18.3333M8.11111 21.337H20.8889M5.55556 4H23.4444C24.8558 4 26 5.24366 26 6.77778V26.2222C26 27.7563 24.8558 29 23.4444 29H5.55556C4.14416 29 3 27.7563 3 26.2222V6.77778C3 5.24366 4.14416 4 5.55556 4Z"
      stroke={props.color || "#3A3D43"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.9247 14.0529C9.70372 9.71743 11.9741 9.07104 13.5 8.5C13.5743 8.47219 13.6262 8.40004 13.6139 8.32099C13.5783 8.09361 13.4584 7.8724 13.3144 7.63296C13.2759 7.56894 13.2843 7.48664 13.337 7.43391C14.1662 6.6041 16.2914 7.15377 16.1076 7.52516C15.8527 8.04037 15.3437 8.48717 15.9142 8.67901C18.4857 9.54388 18.0093 11.5572 17.629 12.7091C17.2412 13.8838 15.9808 16.5487 14.9668 17.8925C14.5865 18.0845 14.2064 18.5068 11.9247 14.0529Z"
      stroke={props.color || "#3A3D43"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;
