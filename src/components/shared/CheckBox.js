import React from "react";
import { Checkbox, Text } from "native-base";
import { Pressable, StyleSheet, View } from "react-native";

import { Check } from "../Icons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  wrapper: {
    height: 48,
    width: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  checkbox: {
    height: 25,
    width: 25,
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  icon: { top: -6 },
  label: {
    flex: 1,
    fontSize: 16,
    color: "#3A3D43",
  },
  darkContainer: {
    backgroundColor: "rgba(255,255,255,0.091)",
    borderColor: "rgba(255,255,255,0.091)",
  },
  lightText: {
    color: "#fff",
  },
});

export default function CheckboxField({
  checked,
  onPress,
  label,
  containerStyles,
  dark,
}) {
  return (
    <View style={[styles.container, containerStyles || {}]}>
      <Pressable onPress={onPress} style={styles.wrapper}>
        <View style={[styles.checkbox, dark ? styles.darkContainer : {}]}>
          {checked && (
            <Check
              style={styles.icon}
              color={dark ? "#fff" : ""}
              label={label}
            />
          )}
        </View>
      </Pressable>
      <Pressable
        onPress={onPress}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        {!!label && typeof label === "string" ? (
          <Text style={[styles.label, dark ? styles.lightText : {}]}>
            {label}
          </Text>
        ) : (
          label
        )}
      </Pressable>
    </View>
  );
}
