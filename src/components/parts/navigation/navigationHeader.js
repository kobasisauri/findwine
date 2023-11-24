import { useNavigation } from "@react-navigation/native";
import { Box, Text } from "native-base";
import { StyleSheet, Platform, Pressable, View } from "react-native";
import { useDispatch } from "react-redux";
import colors from "../../../constants/colors";
import { ArrowLeft, Burger } from "../../Icons";

const showMenu = () => ({
  type: "SHOW_MENU",
});

function NavigationHeader({ title, textStyle, headerStyle, tab }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const text = [styles.headerText];

  if (textStyle) {
    text.push(textStyle);
  }

  return (
    <>
      <Box
        style={[
          styles.header,
          Platform.OS !== "ios" && { alignItems: "center" },
          headerStyle,
        ]}
      >
        {!!tab ? (
          <View style={styles.back} />
        ) : (
          <Pressable onPress={() => navigation.goBack()} style={styles.back}>
            <ArrowLeft />
          </Pressable>
        )}

        <Text style={text}>{title}</Text>

        <Pressable style={styles.back} onPress={() => dispatch(showMenu())}>
          <Burger />
        </Pressable>
      </Box>
    </>
  );
}

export default NavigationHeader;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.darkGray,
  },
  back: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 65,
  },
  headerText: {
    color: colors.white,
    fontSize: 14,
    textAlign: "center",
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
