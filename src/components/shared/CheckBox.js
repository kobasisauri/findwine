import React from "react";
import { Checkbox, Text } from "native-base";
import { StyleSheet, View } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  labelText: {
    color: colors.gray,
    fontSize: 14,
  },
});

export default function CheckboxField({ children, value, ...rest }) {
  return (
    <View style={styles.container}>
      <Checkbox
        borderColor={colors.gray}
        borderRadius={5}
        borderWidth="1"
        _checked={{
          backgroundColor: colors.primary,
          borderColor: colors.primary,
        }}
        value={value}
        {...rest}
      >
        {children && <Text style={styles.labelText}>{children}</Text>}
      </Checkbox>
    </View>
  );
}
