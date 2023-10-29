import React from "react";
import { Text, Select, Box } from "native-base";
import { StyleSheet, View } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  dropdownContainer: {
    marginBottom: 12,
  },
  labelText: {
    color: colors.gray,
    fontSize: 18,
    marginBottom: 2,
  },
  dropdown: {
    fontSize: 14,
    height: 48,
    fontWeight: "500",
    paddingBottom: 10,
    color: colors.gray,
    paddingLeft: 16,
    borderRadius: 8,
    borderColor: colors.gray,
  },
  errorText: {
    marginTop: 5,
    color: colors.error,
  },
});

export default function Dropdown({ label, errorText, data, ...rest }) {
  return (
    <View style={styles.dropdownContainer}>
      {label && <Text style={styles.labelText}>{label}</Text>}
      <Select
        style={styles.dropdown}
        {...rest}
        dropdownIcon={
          <Box marginRight={14}>{/* <SvgIcon name="selectArrow" /> */}</Box>
        }
      >
        {data.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Select.Item key={i} label={item.label} value={item.value} />
        ))}
      </Select>
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
}
