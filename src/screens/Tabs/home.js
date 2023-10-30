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

import { t } from "../../translation";
import { Box } from "native-base";

function HomeScreen({ navigation }) {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator="false">
        <View
          style={[
            styles.header,
            Platform.OS !== "ios" && { alignItems: "center" },
            { justifyContent: "space-between" },
          ]}
        >
          <View style={styles.back}>
            <Image source={require("../../assets/img/logo.png")} />
          </View>
          <Pressable>
            <ProfileTab color="#fff" />
          </Pressable>
        </View>

        <View style={styles.bottonHeader}>
          <Text style={{ color: "#fff" }}>{t("connectingWineLovers")}</Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 32,
              fontFamily: "montserrat",
              fontWeight: "700",
            }}
          >
            {t("headerText")}
          </Text>
          <Text
            style={{
              color: "#B44D2D",
              fontSize: 32,
              fontFamily: "montserrat",
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
    // marginBottom: 16,
    width: 1,
    height: 107,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.54)",
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
