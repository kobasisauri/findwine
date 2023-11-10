import React from "react";
import { Checkbox, Text } from "native-base";
import { Pressable, StyleSheet, View } from "react-native";

import { Check } from "../Icons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  checkbox: {
    height: 25,
    width: 25,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    marginRight: 17,
  },
  icon: { top: -6 },
  label: {
    flex: 1,
    fontSize: 16,
    color: "#3A3D43",
  },
});

export default function CheckboxField({
  checked,
  onPress,
  label,
  containerStyles,
}) {
  return (
    <View style={[styles.container, containerStyles || {}]}>
      <Pressable style={styles.checkbox} onPress={onPress}>
        {checked && <Check style={styles.icon} />}
      </Pressable>
      <Pressable onPress={onPress}>
        <Text style={styles.label}>{label}</Text>
      </Pressable>
    </View>
  );
}
