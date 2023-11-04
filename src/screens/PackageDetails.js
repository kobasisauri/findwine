import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import { t } from "../translation";
import NavigationHeader from "../components/parts/navigation/navigationHeader";
import Container from "../components/shared/Container";
import Title from "../components/shared/Title";
import { Grape, Location, Offer, Phone } from "../components/Icons";
import { getWinePassport } from "../services/winePassports";
import Text from "../components/shared/Text";
import Loader from "../components/shared/Loader";
import RegisterRequiredModal from "../components/shared/RegisterRequiredModal";

function PackageDetails({ route }) {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    if (route.params?.id) {
      getWinePassport(route.params?.id).then((res) => {
        setData(res);
      });
    }
  }, [route.params?.id]);

  return (
    <Container style={{ backgroundColor: "#F2F2F2" }}>
      <NavigationHeader title={t("passportDetails")} />

      {data ? (
        <ScrollView
          showsVerticalScrollIndicator="false"
          style={{ paddingHorizontal: 16 }}
        >
          <Title title={data ? data.name : ""} />

          <View style={styles.container}>
            {!!data?.companies?.length &&
              data?.companies.map((item) => (
                <View key={item.id}>
                  <View style={styles.titleContainer}>
                    <Text
                      fontSize={18}
                      uppercase
                      style={{ fontFamily: "monseratBold" }}
                    >
                      {item.companies.name}
                    </Text>
                  </View>
                  <Text style={styles.title}>{t("contact")}</Text>

                  <View style={{ flexDirection: "row", marginBottom: 16 }}>
                    <Location style={{ marginRight: 10 }} />
                    <View>
                      <Text>
                        {t("village")} {item.companies.village},{" "}
                        {item.companies.city.name},
                      </Text>
                      <Text>
                        {item.companies.region.name} {t("region")}
                      </Text>
                    </View>
                  </View>

                  <View style={{ flexDirection: "row" }}>
                    <Phone style={{ marginRight: 10 }} />
                    <View>
                      <Text>{item.companies.phone}</Text>
                      <Text>{item.companies.email}</Text>
                    </View>
                  </View>

                  {item.companies.company_offer && (
                    <>
                      <Text style={styles.title}>{t("offers")}</Text>

                      <View style={{ flexDirection: "row" }}>
                        <Offer style={{ marginRight: 10 }} />
                        <Text>{item.companies.company_offer}</Text>
                      </View>
                    </>
                  )}

                  {!!item.breeds?.length && (
                    <>
                      <Text style={styles.title}>{t("wines")}</Text>
                      {item.breeds.map((i, j) => (
                        <View
                          key={j}
                          style={{
                            flexDirection: "row",
                            marginBottom: 5,
                          }}
                        >
                          <Grape style={{ marginRight: 10 }} />
                          <Text>{i}</Text>
                        </View>
                      ))}
                    </>
                  )}

                  <Text style={styles.title}>{t("guests")}</Text>

                  <Text>
                    1 - {item.companies.guests} {t("personsAvailable")}
                  </Text>
                </View>
              ))}
          </View>
          <Pressable style={styles.button} onPress={() => setOpenModal(true)}>
            <Text
              fontSize={18}
              color="#fff"
              style={{ fontFamily: "main-bold" }}
            >
              {t("buyNow")}
            </Text>
          </Pressable>
        </ScrollView>
      ) : (
        <Loader />
      )}
      <RegisterRequiredModal
        modalVisible={openModal}
        onClose={() => setOpenModal(false)}
      />
    </Container>
  );
}

export default PackageDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingBottom: 28,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    // marginBottom: 30,
  },
  titleContainer: {
    borderBottomColor: "#292C3133",
    borderBottomWidth: 1,
    paddingHorizontal: 4,
    paddingBottom: 16,
    marginTop: 32,
  },
  title: {
    color: "#B54D2E",
    textTransform: "uppercase",
    fontFamily: "monseratBold",
    marginBottom: 17,
    marginTop: 30,
  },
  button: {
    backgroundColor: "#2F3238",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 28,
    marginBottom: 50,
  },
});