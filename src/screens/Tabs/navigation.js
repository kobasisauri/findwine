import { View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { t } from "../../translation";
import Container from "../../components/shared/Container";
import colors from "../../constants/colors";
import Text from "../../components/shared/Text";

const navs = [
  { url: "profile", title: "winePassport" },
  { url: "wineries", title: "wineries" },
  { url: "events", title: "events" },
  { url: "contact", title: "contact" },
];

function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <Container>
      <View style={{ flex: 1, backgroundColor: colors.darkGray }}>
        {/* <View
          style={[
            styles.header,
            Platform.OS !== "ios" && { alignItems: "center" },
            { justifyContent: "space-between" },
          ]}
        >
          <View style={styles.logo}>
            <Image
              source={require("../../assets/img/logo.png")}
              style={{ height: 41, width: 82 }}
            />
          </View>
        </View> */}

        <View style={styles.container}>
          {navs.map((nav, i) => (
            <Pressable
              style={[
                styles.item,
                i === navs.length - 1 ? styles.withoutBorder : {},
              ]}
              key={nav.url}
              onPress={() => navigation.navigate(nav.url)}
            >
              <Text style={styles.itemText} uppercase>
                {t(nav.title)}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </Container>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  // header: {
  //   display: "flex",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   paddingRight: 16,
  // },
  // logo: {
  //   paddingTop: 9,
  //   paddingBottom: 9,
  //   paddingLeft: 16,
  // },
  container: {
    marginTop: 60,
  },
  item: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#D8D9DA33",
    paddingVertical: 25,
  },
  withoutBorder: {
    borderBottomWidth: 0,
  },
  itemText: {
    color: "#fff",
    fontFamily: "monseratBold",
  },
});
