import { useEffect } from "react";
import { View, StyleSheet, Pressable, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { t } from "../../translation";
import colors from "../../constants/colors";
import Text from "../shared/Text";
import { Close } from "../Icons";
import useStore from "../../stores/store";

const navs = [
  { url: "profile", title: "winePassport" },
  { url: "wineries", title: "wineries" },
  { url: "events", title: "events" },
  { url: "contact", title: "contact" },
  { url: "terms", title: "termsOfUse" },
];

function Menu() {
  const navigation = useNavigation();
  const {
    isMenuOpen,
    setMenu,
    setToken,
    setUserData,
    logOut,
    token,
    setSignInModal,
  } = useStore((state) => state);

  useEffect(() => {
    async function fetchData() {
      const storageToken = await AsyncStorage.getItem("token");
      const userData = JSON.parse(await AsyncStorage.getItem("userData"));

      if (storageToken) {
        setToken(storageToken);
        setUserData(userData);
      }
    }

    fetchData();
  }, [token]);

  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          backgroundColor: colors.darkGray,
          zIndex: 999,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        },
        {
          display: isMenuOpen ? "flex" : "none",
        },
      ]}
    >
      <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
        <Pressable
          onPress={() => setMenu(false)}
          style={{
            padding: 12,
            marginRight: 8,
          }}
        >
          <Close color="#fff" />
        </Pressable>
      </View>

      <View style={styles.container}>
        {navs.map((nav) => (
          <Pressable
            style={[styles.item]}
            key={nav.url}
            onPress={() => {
              navigation.navigate(nav.url);
              setMenu(false);
            }}
          >
            <Text style={styles.itemText} uppercase>
              {t(nav.title)}
            </Text>
          </Pressable>
        ))}

        <Pressable
          style={[styles.item, styles.withoutBorder]}
          onPress={() => {
            setMenu(false);

            if (token) {
              logOut();
              AsyncStorage.multiRemove(["token", "role", "userData"]);
            } else {
              setSignInModal(true);
            }
          }}
        >
          <Text style={styles.itemText} uppercase>
            {token ? t("signOut") : t("signIn")}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default Menu;

const styles = StyleSheet.create({
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
