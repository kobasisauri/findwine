import styled from "styled-components/native";
import colors from "../../constants/colors";

export default TextComp = styled.Text`
  font-size: ${(props) =>
    typeof props.fontSize === "number"
      ? `${props.fontSize}px`
      : props.fontSize === "sm"
      ? "10px"
      : props.fontSize === "lg"
      ? "16px"
      : "14px"};
  color: ${(props) =>
    props.color ? props.color : props.light ? colors.white : colors.text};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
  text-align: ${(props) =>
    props.align === "center"
      ? "center"
      : props.align === "right"
      ? "right"
      : "left"};
  font-weight: ${(props) =>
    props.fontWeight === "bold"
      ? 700
      : props.fontWeight === "thin"
      ? 100
      : props.fontWeight === "semi"
      ? 500
      : 400};
  margin-top: ${(props) =>
    typeof props.marginTop === "number"
      ? `${props.marginTop}px`
      : props.marginTop
      ? `${Distances[props.marginTop]}px`
      : 0};
  margin-left: ${(props) =>
    typeof props.marginLeft === "number"
      ? `${props.marginLeft}px`
      : props.marginLeft
      ? `${Distances[props.marginLeft]}px`
      : 0};
  margin-right: ${(props) =>
    typeof props.marginRight === "number"
      ? `${props.marginRight}px`
      : props.marginRight
      ? `${Distances[props.marginRight]}px`
      : 0};
  margin-bottom: ${(props) =>
    typeof props.marginBottom === "number"
      ? `${props.marginBottom}px`
      : props.marginBottom
      ? `${Distances[props.marginBottom]}px`
      : 0};
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
  font-family: ${(props) => (props.font ? "main" : "monsterat")};
  text-align: ${(props) => (props.textCenter ? "center" : "left")};
`;
