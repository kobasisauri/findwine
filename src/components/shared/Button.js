import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.primary,
    width: "100%",
  },
  containerOutline: {
    backgroundColor: "transparent",
    borderColor: colors.border,
  },
  text: {
    color: colors.white,
    alignSelf: "center",
    fontFamily: "Montserrat",
    fontSize: 16,
    lineHeight: 17,
  },
  textOutline: {
    color: colors.primary,
  },
  outlined: {
    backgroundColor: "transparent",
    boorderColor: colors.primary,
  },
  outlinedText: {
    color: colors.text,
  },
});

export default function Button({
  onPress = () => {},
  children = "",
  type,
  style,
  buttonTextStyle,
  outlined,
}) {
  const containerStyles = [styles.container];
  const textStyles = [styles.text];

  if (style) {
    containerStyles.push(style);
  }

  if (buttonTextStyle) {
    textStyles.push(buttonTextStyle);
  }

  if (type === "outline") {
    containerStyles.push(styles.containerOutline);
    textStyles.push(styles.textOutline);
  }

  if (outlined) {
    containerStyles.push(styles.outlined);
    textStyles.push(styles.outlinedText);
  }

  return (
    <TouchableOpacity onPress={onPress} style={containerStyles}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
}
