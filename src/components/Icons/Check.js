import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg width={29} height={29} viewBox="0 0 29 29" fill="none" {...props}>
    <Path
      d="M26.0157 8.79793L11.5157 23.2979C11.4315 23.3822 11.3316 23.449 11.2216 23.4946C11.1115 23.5402 10.9936 23.5637 10.8745 23.5637C10.7554 23.5637 10.6375 23.5402 10.5275 23.4946C10.4175 23.449 10.3175 23.3822 10.2334 23.2979L3.88961 16.9542C3.71956 16.7841 3.62402 16.5535 3.62402 16.313C3.62402 16.0725 3.71956 15.8419 3.88961 15.6718C4.05965 15.5018 4.29029 15.4062 4.53078 15.4062C4.77126 15.4062 5.0019 15.5018 5.17195 15.6718L10.8745 21.3755L24.7334 7.51558C24.9034 7.34553 25.134 7.25 25.3745 7.25C25.615 7.25 25.8457 7.34553 26.0157 7.51558C26.1857 7.68563 26.2813 7.91627 26.2813 8.15675C26.2813 8.39724 26.1857 8.62788 26.0157 8.79793Z"
      fill="black"
    />
  </Svg>
);

export default SvgComponent;