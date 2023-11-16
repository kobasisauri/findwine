import Svg, { Path, Rect, Line } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg width={35} height={35} viewBox="0 0 35 35" fill="none" {...props}>
    <Rect
      x="4.8"
      y="3.89375"
      width="25.1857"
      height="27.9312"
      rx="2.2"
      stroke={props.color || "#3A3D43"}
      strokeWidth="1.6"
    />
    <Path
      d="M11.5 2L11.5 6.375"
      stroke={props.color || "#3A3D43"}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <Path
      d="M23.2856 2L23.2856 6.375"
      stroke={props.color || "#3A3D43"}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <Line
      x1="5"
      y1="10.2"
      x2="30"
      y2="10.2"
      stroke={props.color || "#3A3D43"}
      strokeWidth="1.6"
    />
    <Path
      d="M17.3198 15.2161C17.3926 15.0653 17.6074 15.0653 17.6802 15.2161L19.009 17.9729C19.2714 18.5172 19.7894 18.8936 20.3882 18.9749L23.4206 19.3868C23.5866 19.4094 23.653 19.6137 23.532 19.7295L21.3208 21.8452C20.8842 22.263 20.6863 22.8719 20.794 23.4665L21.3393 26.4779C21.3692 26.6427 21.1953 26.769 21.0478 26.6897L18.3524 25.2405C17.8201 24.9543 17.1799 24.9543 16.6476 25.2405L13.9522 26.6897C13.8047 26.769 13.6308 26.6427 13.6607 26.4779L14.206 23.4665C14.3137 22.8719 14.1158 22.263 13.6792 21.8452L11.468 19.7295C11.347 19.6137 11.4134 19.4094 11.5794 19.3868L14.6118 18.9749C15.2106 18.8936 15.7286 18.5172 15.991 17.9729L17.3198 15.2161Z"
      stroke={props.color || "#3A3D43"}
      strokeWidth="1.6"
    />
  </Svg>
);

export default SvgComponent;
