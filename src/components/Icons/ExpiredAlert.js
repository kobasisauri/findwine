import Svg, { Path, Defs, ClipPath, Rect, G } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G clip-path="url(#clip0_1645_3996)">
      <Path
        d="M12.25 10.8438V12.25H13.6563M11.3876 9.00444L6.91384 0.951625C6.75384 0.663625 6.44656 0.46875 6.09375 0.46875C5.74094 0.46875 5.43366 0.663625 5.27366 0.951625L0.586157 9.38913C0.508914 9.52818 0.468499 9.68468 0.468751 9.84375C0.468751 10.3615 0.88847 10.7813 1.40625 10.7813H9.22203M6.09375 4.21875V6.09375M6.09375 7.67308V7.74167"
        stroke="black"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.25 15.5312C14.0622 15.5312 15.5312 14.0622 15.5312 12.25C15.5312 10.4378 14.0622 8.96875 12.25 8.96875C10.4378 8.96875 8.96875 10.4378 8.96875 12.25C8.96875 14.0622 10.4378 15.5312 12.25 15.5312Z"
        stroke="black"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1645_3996">
        <Rect width="16" height="16" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
