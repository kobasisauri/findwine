import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Box, ScrollView } from "native-base";
import QRCode from "react-native-qrcode-svg";

import NavigationHeader from "../../components/parts/navigation/navigationHeader";
import Container from "../../components/shared/Container";
import Text from "../../components/shared/Text";
import { t } from "../../translation";
import {
  Info,
  Edit,
  Bonus,
  Key,
  ExpiredAlert,
  QrCode,
} from "../../components/Icons";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import Dropdown from "../../components/shared/Dropdown";

import { getCountries } from "../../services/dropdowns";
import {
  changePassword,
  getUserData,
  editUserData,
} from "../../services/signUp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import notificationService from "../../services/notify";

function SearchScreen() {
  const [active, setActive] = useState(1);
  const [render, setRender] = useState(0);
  const [values, setValues] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const [countries, setCountries] = useState([]);

  const [edit, setEdit] = useState(false);
  const [editValues, setEditValues] = useState({
    full_name: "",
    phone: "",
    country: "",
  });
  const [winePassports, setWinePassports] = useState([]);

  const [auth, setAuth] = useState(1);
  const [userData, setUserData] = useState();

  const visitors = [1, 2, 3];

  useEffect(() => {
    getUserData().then((res) => {
      setWinePassports(res.passport);
      setUserData({
        ...res.user,
        country: countries?.length
          ? countries.filter((i) => +i.value === +res.user.country)[0]?.label ||
            ""
          : "",
      });
      setEditValues(res.user);
    });
  }, [render, countries]);

  useEffect(() => {
    getCountries().then((res) => {
      const transform = res.map((item) => ({
        value: item.id,
        label: item.name,
      }));
      setCountries(transform);
    });
  }, []);

  const onPassChange = () => {
    changePassword({
      new_password: values.newPassword,
      old_password: values.currentPassword,
    })
      .then((res) => {
        if (res.status === "OK") {
          notificationService.notify(
            "success",
            "Note",
            "Password changed sucessfully"
          );
          setValues({
            currentPassword: "",
            newPassword: "",
          });
        }
      })
      .catch(() => {
        notificationService.notify(
          "error",
          "Note",
          "Current password is incorrect"
        );
      });
  };

  const submitEditData = () => {
    editUserData(editValues).then((res) => {
      setEdit(false);
      setRender((state) => state + 1);
    });
  };

  return (
    <Container style={{ backgroundColor: "#F2F2F2" }}>
      <NavigationHeader title={t("profile")} tab />
      <KeyboardAvoidingView
        keyboardVerticalOffset={20}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        {auth === 1 ? (
          <>
            <View style={styles.titlecontaner}>
              <View style={{ flexDirection: "row" }}>
                <Pressable onPress={() => setActive(1)}>
                  <Text
                    style={[styles.titleText, active === 1 && styles.active]}
                  >
                    {t("profile")}
                  </Text>
                </Pressable>
                <Pressable onPress={() => setActive(2)}>
                  <Text
                    style={[styles.titleText, active === 2 && styles.active]}
                  >
                    {t("winePassport")}
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
              <ScrollView
                style={{ paddingHorizontal: 16, gap: 18 }}
                showsVerticalScrollIndicator={false}
              >
                {!!userData && (
                  <View style={styles.infoContainer}>
                    <View style={styles.infoHeading}>
                      <View style={[{ gap: 8, flexDirection: "row" }]}>
                        <Info />
                        <Text style={{ fontFamily: "monseratBold" }}>
                          {t("personalInfo")}
                        </Text>
                      </View>

                      <Pressable
                        onPress={() => {
                          setEdit((state) => !state);
                        }}
                      >
                        <Edit />
                      </Pressable>
                    </View>
                    <View style={{ marginTop: 20, gap: 16 }}>
                      {!edit ? (
                        <>
                          <View style={styles.infoItem}>
                            <Text>{t("fullName")}</Text>
                            <Text style={{ fontFamily: "monseratBold" }}>
                              {userData?.full_name}
                            </Text>
                          </View>
                          <View style={styles.infoItem}>
                            <Text>{t("email")}</Text>
                            <Text style={{ fontFamily: "monseratBold" }}>
                              {userData?.email}
                            </Text>
                          </View>
                          <View style={styles.infoItem}>
                            <Text>{t("phone")}</Text>
                            <Text style={{ fontFamily: "monseratBold" }}>
                              {userData?.phone}
                            </Text>
                          </View>
                          <View style={styles.infoItem}>
                            <Text>{t("country")}</Text>
                            <Text style={{ fontFamily: "monseratBold" }}>
                              {userData?.country}
                            </Text>
                          </View>
                        </>
                      ) : (
                        <>
                          <Input
                            placeholder={t("fullName")}
                            value={editValues.full_name}
                            onChangeText={(val) =>
                              setEditValues((state) => ({
                                ...state,
                                full_name: val,
                              }))
                            }
                          />
                          <Input
                            placeholder={t("email")}
                            value={editValues.email}
                            onChangeText={(val) =>
                              setEditValues((state) => ({
                                ...state,
                                email: val,
                              }))
                            }
                            disabled={true}
                          />
                          <Input
                            placeholder={t("phone")}
                            value={editValues.phone}
                            onChangeText={(val) =>
                              setEditValues((state) => ({
                                ...state,
                                phone: val,
                              }))
                            }
                          />
                          <Dropdown
                            search={true}
                            containerStyle={{ flex: 1 }}
                            placeholderText="Country"
                            data={countries}
                            value={+editValues.country}
                            onChange={(val) => {
                              setEditValues((state) => ({
                                ...state,
                                country: val.value,
                              }));
                            }}
                          />
                          <Button
                            style={{ width: "55%", marginTop: 10 }}
                            onPress={() => submitEditData()}
                          >
                            {t("save")}
                          </Button>
                        </>
                      )}
                    </View>
                  </View>
                )}

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
                        setValues((state) => ({
                          ...state,
                          currentPassword: val,
                        }))
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
                      onPress={onPassChange}
                    >
                      {t("save")}
                    </Button>
                  </View>
                </View>
              </ScrollView>
            )}
            {console.log(winePassports)}
            {active === 2 && (
              <ScrollView
                style={{ paddingHorizontal: 16, gap: 18 }}
                showsVerticalScrollIndicator={false}
              >
                <View
                  style={{
                    backgroundColor: "#fff",
                    padding: 28,
                    marginBottom: 50,
                    borderRadius: 8,
                  }}
                >
                  <View
                    style={{
                      borderRadius: 8,
                      alignItems: "center",
                      backgroundColor: "#F2F2F2",
                      paddingBottom: 72,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "monseratBold",
                        paddingVertical: 24,
                      }}
                    >
                      {userData.full_name}
                    </Text>
                    <QRCode size={200} value={winePassports[0].hash} />
                  </View>
                </View>

                <View style={styles.infoContainer}>
                  <View style={styles.infoHeading}>
                    <View
                      style={[
                        { gap: 8, flexDirection: "row", alignItems: "center" },
                      ]}
                    >
                      <ExpiredAlert />
                      <Text style={{ fontFamily: "monseratBold" }}>
                        {t("expiredPassports")}
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginTop: 20, gap: 16 }}>
                    <View style={styles.infoItem}>
                      <Text>{t("fullName")}</Text>
                      <Text style={{ fontFamily: "monseratBold" }}>
                        {userData.full_name}
                      </Text>
                    </View>
                    <View style={styles.infoItem}>
                      <Text>{t("passportType")}</Text>
                      <Text style={{ fontFamily: "monseratBold" }}>
                        {winePassports[0]?.passport?.name}
                      </Text>
                    </View>
                    <View style={styles.infoItem}>
                      <Text>{t("wineries")}</Text>
                      <Text style={{ fontFamily: "monseratBold" }}>
                        {winePassports[0]?.passport?.company_count}
                      </Text>
                    </View>
                    <View style={styles.infoItem}>
                      <Text>{t("expires")}</Text>
                      <Text style={{ fontFamily: "monseratBold" }}>
                        {winePassports[0].expire_date.slice(0, 10)}
                      </Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            )}
          </>
        ) : (
          <>
            <View style={styles.titlecontaner}>
              <View style={{ flexDirection: "row" }}>
                <Pressable onPress={() => setActive(1)}>
                  <Text
                    style={[styles.titleText, active === 1 && styles.active]}
                  >
                    {t("profile")}
                  </Text>
                </Pressable>
                <Pressable onPress={() => setActive(2)}>
                  <Text
                    style={[styles.titleText, active === 2 && styles.active]}
                  >
                    {t("visitors")}
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
              <ScrollView
                style={{ paddingHorizontal: 16, gap: 18 }}
                showsVerticalScrollIndicator={false}
              >
                <View style={styles.infoContainer}>
                  <View style={styles.infoHeading}>
                    <View style={[{ gap: 8, flexDirection: "row" }]}>
                      <QrCode />
                      <Text style={{ fontFamily: "monseratBold" }}>
                        {t("scanQrCode")}
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginTop: 20, gap: 16 }}>
                    <View style={styles.infoItem}>
                      <Text>{t("visitorsHasuniqueQrCode")}</Text>
                    </View>
                    <Button
                      style={{ width: "55%", marginBottom: 30, marginTop: 10 }}
                    >
                      {t("scan")}
                    </Button>
                  </View>
                </View>

                <View
                  style={[
                    styles.bonusContainer,
                    {
                      paddingHorizontal: 28,
                      paddingVertical: 20,
                      paddingBottom: 60,
                    },
                  ]}
                >
                  <View style={styles.infoHeading}>
                    <View style={[{ gap: 8, flexDirection: "row" }]}>
                      <Bonus />
                      <Text style={{ fontFamily: "monseratBold" }}>
                        {t("visitors")}
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginTop: 25 }}>
                    <View style={styles.bonusItem}>
                      <Text>You have</Text>
                      <Text style={styles.bonusNumber}>20</Text>
                      <Text
                        style={{
                          textTransform: "lowercase",
                        }}
                      >
                        {t("visitorsThisYear")}
                      </Text>
                    </View>
                    <View>
                      <Text marginTop={15}>{t("totalVisitors")}</Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            )}
            {active === 2 && (
              <ScrollView
                style={{ paddingHorizontal: 16, gap: 18 }}
                showsVerticalScrollIndicator={false}
              >
                <View style={styles.infoContainer}>
                  {visitors.map((item, i) => (
                    <View
                      key={i}
                      style={[
                        {
                          marginTop: 20,
                          marginBottom: 20,
                          gap: 16,
                          borderBottomWidth: 1,
                          paddingBottom: 35,
                          borderBottomColor: "rgba(41, 44, 49, 0.20)",
                        },
                        i === visitors.length - 1 && {
                          borderBottomWidth: 0,
                        },
                      ]}
                    >
                      <View style={styles.infoItem}>
                        <Text>{t("fullName")}</Text>
                        <Text style={{ fontFamily: "monseratBold" }}>
                          Wesley Mun
                        </Text>
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
                        <Text>{t("country")}</Text>
                        <Text style={{ fontFamily: "monseratBold" }}>
                          France
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </ScrollView>
            )}
          </>
        )}
      </KeyboardAvoidingView>
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
