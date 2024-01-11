import { Input, Pressable, Box } from "native-base";
import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    // alignItems: "center",
    height: 60,
    borderRadius: 4,
    borderColor: "#292C3166",
    backgroundColor: "#fff",
    borderWidth: 1,
    marginBottom: 12,
  },
  textInput: {
    fontSize: 14,
    height: 60,
    color: colors.gray,
    fontFamily: "monsterat",
    paddingLeft: 15,
    paddingRight: 15,
  },
  disabled: {
    backgroundColor: colors.lightGray,
    opacity: 1,
  },
});

export default function TextInput({
  disabled,
  secureTextEntry,
  onChangeText,
  onPress,
  pre,
  suf,
  style,
  containerStyle,
  placeholder,
  ...rest
}) {
  return (
    <Pressable
      style={[
        styles.inputContainer,
        containerStyle || {},
        disabled ? styles.disabled : {},
      ]}
    >
      {pre && <Box>{pre}</Box>}

      <Box style={{ flex: 1 }}>
        <Input
          secureTextEntry={!!secureTextEntry}
          isDisabled={!!disabled}
          style={[styles.textInput, style && style]}
          {...rest}
          onPress={onPress}
          onChangeText={onChangeText}
          variant="unstyled"
          aria-label={placeholder}
          placeholder={placeholder}
        />
      </Box>

      {suf && (
        <Box
          style={{
            width: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {suf}
        </Box>
      )}
    </Pressable>
  );
}
