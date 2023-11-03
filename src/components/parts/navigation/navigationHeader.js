import { useNavigation } from "@react-navigation/native";
import { Box, Text } from "native-base";
import { StyleSheet, Platform, Pressable } from "react-native";
import colors from "../../../constants/colors";
import { ArrowLeft } from "../../Icons";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 16,
    backgroundColor: colors.darkGray,
  },
  back: {
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 16,
  },
  headerText: {
    color: colors.white,
    fontSize: 14,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    transform: [{ translateX: -10 }],
    textTransform: "uppercase",
  },
  components: {
    display: "flex",
    flexDirection: "row",
  },
  count: {
    position: "absolute",
    top: -4,
    left: -6,
    backgroundColor: "#FF2D00",
    height: 13,
    width: 13,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  countText: {
    color: "#fff",
    fontSize: 10,
  },
  cartCount: {
    top: -7,
    left: 6,
  },
});

function NavigationHeader({ title, textStyle, components, headerStyle }) {
  const navigation = useNavigation();
  const text = [styles.headerText];

  if (textStyle) {
    text.push(textStyle);
  }

  return (
    <Box
      style={[
        styles.header,
        Platform.OS !== "ios" && { alignItems: "center" },
        components && { justifyContent: "space-between" },
        headerStyle,
      ]}
    >
      <Pressable onPress={() => navigation.goBack()} style={styles.back}>
        <ArrowLeft />
      </Pressable>
      <Text style={text}>{title}</Text>
    </Box>
  );
}

export default NavigationHeader;