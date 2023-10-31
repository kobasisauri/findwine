import {
  Text,
  Image,
  View,
  StyleSheet,
  Pressable,
  Platform,
  ScrollView,
} from "react-native";
import Container from "../../components/shared/Container";
import colors from "../../constants/colors";
import ProfileTab from "../../components/Icons/ProfileTab";
import Facebook from "../../components/Icons/Facebook";
import Instagram from "../../components/Icons/Instagram";
import OutlinedButton from "../../components/shared/OutlinedButton";

import { t } from "../../translation";
import { Box } from "native-base";

function HomeScreen({ navigation }) {
  return (
    <Container style={{ backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator="false">
        <View
          style={[
            styles.header,
            Platform.OS !== "ios" && { alignItems: "center" },
            { justifyContent: "space-between" },
          ]}
        >
          <View style={styles.back}>
            <Image
              source={require("../../assets/img/logo.png")}
              style={{ height: 41, width: 82 }}
            />
          </View>
          {/* <Pressable>
            <ProfileTab color="#fff" />
          </Pressable> */}
        </View>

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
              <Box style={styles.line} />
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

        <View
          style={{
            paddingTop: 50,
            marginHorizontal: 45,
            alignItems: "center",
            width: 300,
            marginBottom: 24,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: 700,
              paddingHorizontal: 30,
              textAlign: "center",
              fontFamily: "monsterat",
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            {t("whatIsWinePasport")}
          </Text>

          <Box style={styles.bottomLine}>
            <Box style={styles.buttomLineMidle} />
          </Box>
        </View>

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
  bottomLine: {
    width: 282,
    height: 1,
    borderWidth: 1,
    borderColor: "#B2B2B2",
    alignItems: "center",
    justifyContent: "center",
  },
  buttomLineMidle: {
    width: 162,
    height: 1.5,
    borderWidth: 1,
    borderColor: "#DE6D4A",
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
