import { useState, useEffect } from "react";
import { View, StyleSheet, Pressable, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { t } from "../../translation";
import colors from "../../constants/colors";
import Text from "../shared/Text";
import { Close } from "../Icons";

const navs = [
  { url: "profile", title: "winePassport" },
  { url: "wineries", title: "wineries" },
  { url: "events", title: "events" },
  { url: "contact", title: "contact" },
];

const hideMenu = () => ({
  type: "HIDE_MENU",
});

function Menu() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [auth, setAuth] = useState(false);

  const { isVisible } = useSelector((state) => state.menu);

  useEffect(() => {
    async function fetchData() {
      const token = await AsyncStorage.getItem("token");

      if (token) {
        setAuth(auth);
      }
    }

    fetchData();
  }, []);

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
          display: isVisible ? "flex" : "none",
        },
      ]}
    >
      <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
        <Pressable
          onPress={() => dispatch(hideMenu())}
          style={{
            padding: 8,
            marginRight: 12,
          }}
        >
          <Close color="#fff" />
        </Pressable>
      </View>

      <View style={styles.container}>
        {navs.map((nav, i) => (
          <Pressable
            style={[
              styles.item,
              // i === navs.length - 1 ? styles.withoutBorder : {},
            ]}
            key={nav.url}
            onPress={() => {
              navigation.navigate(nav.url);
              dispatch(hideMenu());
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
            dispatch(hideMenu());

            if (auth) {
              AsyncStorage.removeItem("token");
            } else {
              console.log(1);
            }
          }}
        >
          <Text style={styles.itemText} uppercase>
            {auth ? t("signOut") : t("signIn")}
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
