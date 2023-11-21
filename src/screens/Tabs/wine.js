import { useState } from "react";
import { View, StyleSheet, Pressable, Image } from "react-native";
import { Box, ScrollView } from "native-base";

import NavigationHeader from "../../components/parts/navigation/navigationHeader";
import Container from "../../components/shared/Container";
import Text from "../../components/shared/Text";
import { t } from "../../translation";
import { Info, Edit, Bonus, Key } from "../../components/Icons";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";

function SearchScreen({ navigation }) {
  const [active, setActive] = useState(1);
  const [values, setValues] = useState({
    currentPassword: "",
    newPassword: "",
  });

  return (
    <Container style={{ backgroundColor: "#F2F2F2" }}>
      <NavigationHeader title={t("profile")} tab />
      <View style={styles.titlecontaner}>
        <View style={{ flexDirection: "row" }}>
          <Pressable onPress={() => setActive(1)}>
            <Text style={[styles.titleText, active === 1 && styles.active]}>
              Profile
            </Text>
          </Pressable>
          <Pressable onPress={() => setActive(2)}>
            <Text style={[styles.titleText, active === 2 && styles.active]}>
              WINE PASSPORT
            </Text>
          </Pressable>
        </View>
        <Box
          style={[
            styles.bottomLine,
            active === 1 ? {} : { alignItems: "flex-end" },
          ]}
        >
          <Box
            style={[
              styles.buttomLineMidle,
              active === 1 && styles.activeBottomLine,
            ]}
          />
          <Box
            style={[
              styles.buttomLineMidle,
              active === 2 && styles.activeBottomLine2,
            ]}
          />
        </Box>
      </View>
      {active === 1 && (
        <ScrollView style={{ paddingHorizontal: 16, gap: 18 }}>
          <View style={styles.infoContainer}>
            <View style={styles.infoHeading}>
              <View style={[{ gap: 8, flexDirection: "row" }]}>
                <Info />
                <Text style={{ fontFamily: "monseratBold" }}>
                  {t("personalInfo")}
                </Text>
              </View>

              <Edit />
            </View>
            <View style={{ marginTop: 20, gap: 16 }}>
              <View style={styles.infoItem}>
                <Text>{t("fullName")}</Text>
                <Text style={{ fontFamily: "monseratBold" }}>Wesley Mun</Text>
              </View>
              <View style={styles.infoItem}>
                <Text>{t("email")}</Text>
                <Text style={{ fontFamily: "monseratBold" }}>
                  Wesleymun@gmail.com
                </Text>
              </View>
              <View style={styles.infoItem}>
                <Text>{t("phone")}</Text>
                <Text style={{ fontFamily: "monseratBold" }}>
                  +995599777777
                </Text>
              </View>
              <View style={styles.infoItem}>
                <Text>{t("birthday")}</Text>
                <Text style={{ fontFamily: "monseratBold" }}>01/01/1990</Text>
              </View>
            </View>
          </View>

          <View style={styles.bonusContainer}>
            <View
              style={{
                paddingHorizontal: 28,
                paddingVertical: 20,
              }}
            >
              <View style={styles.infoHeading}>
                <View style={[{ gap: 8, flexDirection: "row" }]}>
                  <Bonus />
                  <Text style={{ fontFamily: "monseratBold" }}>
                    {t("bonusPoints")}
                  </Text>
                </View>
              </View>
              <View style={{ marginTop: 25 }}>
                <View style={styles.bonusItem}>
                  <Text>You have</Text>
                  <Text style={styles.bonusNumber}>200</Text>
                  <Text
                    style={{
                      fontFamily: "monseratBold",
                      textTransform: "lowercase",
                    }}
                  >
                    {t("bonusPoints")}
                  </Text>
                </View>
                <View>
                  <Text color="#B44D2D" fontSize={16} marginTop={15}>
                    {t("howToUseBonusPoints")}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.bonusImage}>
              <Image
                source={require("../../assets/img/profile-bonus.png")}
                style={{
                  height: 141,
                  width: "100%",
                  borderBottomLeftRadius: 8,
                }}
              />
              <View style={styles.line} />
            </View>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.infoHeading}>
              <View style={[{ gap: 8, flexDirection: "row" }]}>
                <Key />
                <Text style={{ fontFamily: "monseratBold" }}>
                  {t("changePassword")}
                </Text>
              </View>
            </View>
            <View marginTop={20} paddingBottom={30}>
              <Text fontSize={12} marginBottom={15}>
                {t("toChangeYourPassword")}
              </Text>
              <Input
                placeholder={t("currentPassword")}
                value={values.currentPassword}
                onChangeText={(val) =>
                  setValues((state) => ({ ...state, currentPassword: val }))
                }
              />
              <Input
                placeholder={t("newPassword")}
                value={values.newPassword}
                onChangeText={(val) =>
                  setValues((state) => ({ ...state, newPassword: val }))
                }
              />
              <Button
                style={{ width: "55%", marginTop: 10 }}
                onPress={() => console.log(values)}
              >
                {t("save")}
              </Button>
            </View>
          </View>
        </ScrollView>
      )}
    </Container>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  titlecontaner: {
    paddingTop: 50,
    alignItems: "center",
    width: "90%",
    marginBottom: 24,
    marginLeft: "auto",
    marginRight: "auto",
  },
  titleText: {
    fontSize: 16,
    fontWeight: 700,
    paddingHorizontal: 30,
    textAlign: "center",
    fontFamily: "monseratBold",
    marginBottom: 16,
    textTransform: "uppercase",
    opacity: 0.4,
  },
  active: { opacity: 1 },

  bottomLine: {
    width: "100%",
    height: 1,
    borderWidth: 1,
    borderColor: "#B2B2B2",
    justifyContent: "center",
  },

  activeBottomLine: {
    width: "45%",
    borderWidth: 1,
    borderColor: "#DE6D4A",
    height: 1.5,
  },
  activeBottomLine2: {
    width: "55%",
    borderWidth: 1,
    borderColor: "#DE6D4A",
    height: 1.5,
  },
  infoContainer: {
    borderRadius: 8,
    backgroundColor: "#fff",
    paddingHorizontal: 28,
    paddingVertical: 20,
    marginBottom: 18,
  },
  bonusContainer: {
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 18,
  },
  infoHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: 17,
    borderBottomColor: "rgba(41, 44, 49, 0.20)",
  },
  infoItem: { gap: 8 },
  bonusItem: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  bonusNumber: {
    color: "#B44D2D",
    fontSize: 40,
    fontFamily: "monseratBold",
    marginBottom: 10,
  },
  bonusImage: {
    marginTop: 50,
    position: "relative",
  },
  line: {
    position: "absolute",
    top: 40,
    // left: 0,
    bottom: 0,
    right: 0,
    height: 40,
    width: 141,
    backgroundColor: "rgba(255, 255, 255, 0.33)",
    transform: [{ skewY: "55deg" }],
    zIndex: 1,
    overflow: "hidden",
  },
});
