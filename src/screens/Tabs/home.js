import {
  Text,
  Image,
  View,
  StyleSheet,
  Platform,
  ScrollView,
  Pressable,
} from "react-native";
import { useDispatch } from "react-redux";
import { t } from "../../translation";
import Container from "../../components/shared/Container";
import colors from "../../constants/colors";
import { Burger, Facebook, Instagram } from "../../components/Icons";
import OutlinedButton from "../../components/shared/OutlinedButton";
import Title from "../../components/shared/Title";

const showMenu = () => ({
  type: "SHOW_MENU",
});

function HomeScreen({ navigation }) {
  const dispatch = useDispatch();

  return (
    <Container>
      <View
        style={[
          styles.header,
          Platform.OS !== "ios" && { alignItems: "center" },
        ]}
      >
        <View style={styles.back}>
          <Image
            source={require("../../assets/img/logo.png")}
            style={{ height: 41, width: 82 }}
          />
        </View>

        <Pressable style={styles.back} onPress={() => dispatch(showMenu())}>
          <Burger />
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.bottonHeader}>
          <Text style={{ color: "#fff" }}>{t("connectingWineLovers")}</Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 32,
              fontFamily: "monsterat",
              fontWeight: "700",
            }}
          >
            {t("headerText")}
          </Text>
          <Text
            style={{
              color: "#B44D2D",
              fontSize: 32,
              fontFamily: "monsterat",
              fontWeight: "700",
            }}
          >
            {t("winePassport")}
          </Text>
        </View>

        <View
          style={{
            position: "relative",
          }}
        >
          <Image
            style={{
              resizeMode: "cover",
              width: "100%",
              height: 412,
            }}
            source={require("../../assets/img/homePic.png")}
          />
          <View style={styles.imageText}>
            <View
              style={{ flexDirection: "row", gap: 54, alignItems: "center" }}
            >
              <View style={styles.line} />
              <Text
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 16,
                  marginLeft: 16,
                }}
              >
                FOLLOW US
              </Text>
            </View>
            <View style={{ flexDirection: "row", gap: 16 }}>
              <Facebook color="#fff" style={styles.rotate} />
              <Instagram color="#fff" style={styles.rotate} />
            </View>
          </View>
        </View>

        <Title title={t("whatIsWinePasport")} />

        <View style={styles.description}>
          <Text style={{ fontSize: 16, color: "#B44D2D" }}>
            {t("exclusiveOffers")}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "monsterat",
              marginTop: 16,
              color: "#24262B",
              textTransform: "uppercase",
              marginBottom: 14,
              color: "#24262B",
            }}
          >
            {t("wineTasting")}
          </Text>
          <Text
            style={{
              letterSpacing: 0.7,
              lineHeight: 30,
              color: "#3A3D43",
              marginBottom: 30,
            }}
          >
            {t("HomePageText")}
          </Text>

          <OutlinedButton
            style={{ width: "50%" }}
            buttonTextStyle={{ color: "#3A3D43", fontFamily: "monsterat" }}
            onPress={() => navigation.navigate("wine-passport")}
          >
            {t("learnMore")}
          </OutlinedButton>
        </View>
      </ScrollView>
    </Container>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  bottonHeader: {
    paddingTop: 62,
    paddingLeft: 16,
    paddingRight: 86,
    paddingBottom: 70,
    backgroundColor: colors.darkGray,
  },
  imageText: {
    flexDirection: "row",
    position: "absolute",
    right: -80,
    top: 177,
    transform: [{ rotate: "90deg" }],
    alignItems: "center",
    gap: 14,
  },
  rotate: {
    transform: [{ rotate: "-90deg" }],
  },
  line: {
    transform: [{ rotate: "90deg" }],
    width: 1,
    height: 107,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.54)",
  },
  description: {
    backgroundColor: colors.lightGray,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 66,
    marginHorizontal: 16,
    marginBottom: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
