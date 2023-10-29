import React, { useState } from "react";
import { Input, Pressable, Text, Box } from "native-base";
import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import { t } from "../../translation";

const styles = StyleSheet.create({
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
  },
  inputContainer: {
    justifyContent: "space-between",
    height: 48,
    borderRadius: 8,
    borderColor: colors.lightGray,
    backgroundColor: "#fff",
    borderWidth: 1,
    paddingEnd: 35,
    marginBottom: 12,
  },
  labelText: {
    color: colors.gray,
    fontSize: 12,
    position: "absolute",
    top: 3,
    left: 16,
  },
  textInput: {
    fontSize: 14,
    height: 48,
    fontWeight: "bold",
    color: colors.gray,
    fontFamily: "markGeo",
    paddingLeft: 15,
  },
  errorText: {
    marginTop: 5,
    color: colors.error,
  },
  labelInput: {
    paddingTop: 13,
    paddingBottom: 0,
  },
  disabled: {
    backgroundColor: colors.lightGray,
    opacity: 1,
  },
});

export default function TextInput({
  disabled,
  secureTextEntry,
  search,
  onChangeText,
  label,
  errorText,
  onPress,
  pre,
  suf,
  style,
  containerStyle,
  fontMain,
  shadowStyle,
  ...rest
}) {
  const [isPassword, setPassword] = useState(!!secureTextEntry);

  return (
    <Pressable
      style={[
        styles.inputContainer,
        styles.flexRow,
        containerStyle || {},
        disabled ? styles.disabled : {},
      ]}
    >
      {label && <Text style={styles.labelText}>{t(label)}</Text>}

      <Box style={[styles.flexRow, shadowStyle || {}]}>
        {pre && <Box style={{ marginLeft: 15 }}>{pre}</Box>}

        <Input
          secureTextEntry={isPassword}
          isDisabled={!!disabled}
          style={[
            styles.textInput,
            label ? styles.labelInput : {},
            style && style,
            fontMain && { fontFamily: "main" },
          ]}
          {...rest}
          onPress={onPress}
          onChangeText={onChangeText}
          variant="unstyled"
        />
      </Box>

      {suf && <Box>{suf}</Box>}

      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </Pressable>
  );
}
