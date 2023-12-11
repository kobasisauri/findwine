import { Pressable, StyleSheet, FlatList } from "react-native";
import { Box, ScrollView } from "native-base";
import SelectDropdown from "react-native-select-dropdown";
import Text from "./Text";
import { DropdownArrow } from "../Icons";
import Checkbox from "expo-checkbox";

const NewSelect = ({
  data,
  disabled,
  placeholderText,
  multiple,
  value,
  onChange,
  onClear,
  onClearAll,
  searchable,
  suf,
  containerStyle,
  error,
  additionalComponents,
  dark,
  ...rest
}) => {
  return (
    <>
      <Box
        style={[
          styles.container,
          containerStyle || {},
          !(multiple && !!value?.length) ? { marginBottom: 12 } : {},
        ]}
      >
        {!multiple && value && (
          <Box
            style={[
              styles.placeholder,
              (multiple && value.length) || (!multiple && value)
                ? { left: 12, top: -9 }
                : {},
            ]}
          >
            <Text color={error ? "#FF0E56" : "#02244D80"}>
              {placeholderText}
            </Text>
          </Box>
        )}

        <SelectDropdown
          // search={true}
          data={data}
          onSelect={(selectedItem) => {
            onChange(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem) => {
            return selectedItem.value;
          }}
          rowTextForSelection={(item) => {
            return item.label;
          }}
          buttonStyle={[
            styles.buttonStyle,
            error ? styles.error : {},
            dark && { backgroundColor: "rgba(41, 44, 49, 0.791)" },
          ]}
          renderCustomizedButtonChild={(selectedItem) => (
            <Box style={styles.inner}>
              {multiple ? (
                <Text color={dark ? "#fff" : "#3A3D43"}>
                  {/* {value.length
                    ? `არჩეულია ${value.length} ${placeholderText}`
                    : placeholderText} */}
                  {placeholderText}
                </Text>
              ) : (
                <Text
                  color={value && selectedItem?.label ? "#3A3D43" : "#3A3D43"}
                >
                  {(value && selectedItem?.label) ||
                    data.filter((item) => item.value === value)[0]?.label ||
                    placeholderText}
                </Text>
              )}

              <Box
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 15,
                }}
              >
                {additionalComponents && additionalComponents}

                {onClearAll &&
                ((multiple && value.length) || (!multiple && value)) ? (
                  <Pressable
                    onPress={onClearAll}
                    paddingLeft={5}
                    style={{
                      height: 56,
                      justifyContent: "center",
                      paddingHorizontal: 5,
                    }}
                  >
                    <DropdownArrow color={dark && "#fff"} />
                  </Pressable>
                ) : (
                  <DropdownArrow color={dark && "#fff"} />
                )}
              </Box>
            </Box>
          )}
          rowStyle={{
            borderBottomWidth: 0,
            height: undefined,
          }}
          renderCustomizedRowChild={(item) => {
            if (!multiple) {
              return (
                <Box style={{ flex: 1, paddingVertical: 5, paddingRight: 7 }}>
                  <Text>{item.label}</Text>
                </Box>
              );
            } else {
              return (
                <Box style={styles.multipleSelctRow}>
                  <Checkbox
                    value={value?.some((i) => i.value === item.value)}
                    style={styles.checkbox}
                    onValueChange={() => {
                      onChange(item);
                    }}
                    color="#D9D9D9"
                  />

                  <Text style={{ marginLeft: 12 }}>{item.label}</Text>
                </Box>
              );
            }
          }}
          dropdownStyle={styles.dropdownStyle}
          disabled={disabled}
          {...rest}
        />
      </Box>

      {multiple && !!value?.length && (
        <ScrollView
          style={{ marginTop: 12, paddingBottom: 24 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {value.map((item, index) => (
            <Pressable
              style={styles.multipleSelectedItem}
              key={index}
              onPress={() => onClear(item)}
            >
              <Text style={{ marginRight: 8, color: "#02244D" }}>
                {item.label}
              </Text>

              <SvgIcon name="closeSquare" />
            </Pressable>
          ))}
        </ScrollView>
      )}
    </>
  );
};

export default NewSelect;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    flexDirection: "row",
  },
  buttonStyle: {
    position: "relative",
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#C3CDDD4D",
    height: 56,
  },
  error: {
    borderColor: "#FF0E56",
  },
  inner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,
    paddingLeft: 16,
  },
  placeholder: {
    position: "absolute",
    // left: 7,
    // top: 20,
    paddingHorizontal: 5,
    zIndex: 99,
    left: 12,
    top: -9,
    backgroundColor: "#fff",
  },
  dropdownStyle: {
    borderRadius: 8,
    paddingHorizontal: 21,
    paddingVertical: 16,
    // height: 600,
    maxHeight: 400,
  },
  multipleSelctRow: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 7,
    paddingRight: 7,
  },
  checkbox: {
    height: 16,
    width: 16,
    borderRadius: 0,
    borderWidth: 1,
  },
  multipleSelectedItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C3CDDD4D",
    borderRadius: 5,
    paddingVertical: 6,
    paddingLeft: 10,
    paddingRight: 6,
    marginRight: 12,
  },
});
