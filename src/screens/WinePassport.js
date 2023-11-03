import { useEffect, useState } from "react";
import { Image, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { t } from "../translation";
import NavigationHeader from "../components/parts/navigation/navigationHeader";
import Container from "../components/shared/Container";
import Title from "../components/shared/Title";
import { BrandPocket, Cup, Glass, Map } from "../components/Icons";
import DescriptionCards from "../components/shared/DescriptionCards";
import { getWinePassports } from "../services/winePassports";
import Text from "../components/shared/Text";
import { Tick } from "../components/Icons";

function WinePassport() {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    getWinePassports().then((res) => {
      setPackages(res);
    });
  }, []);

  return (
    <Container>
      <NavigationHeader title="Wine Passport" />

      <ScrollView showsVerticalScrollIndicator="false">
        <Title title={t("winePassBenefits")} />

        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/img/benefits.png")}
            style={{ width: "100%" }}
          />
        </View>

        <DescriptionCards
          title={t("benefits.count")}
          text={t("benefits.countText")}
          icon={<Glass />}
        />

        <DescriptionCards
          title={t("benefits.map")}
          text={t("benefits.mapText")}
          icon={<Map />}
        />

        <DescriptionCards
          title={t("benefits.deals")}
          text={t("benefits.dealsText")}
          icon={<Cup />}
        />

        <DescriptionCards
          title={t("benefits.moments")}
          text={t("benefits.momentsText")}
          icon={<BrandPocket />}
        />

        <View style={{ marginTop: 50, paddingHorizontal: 16 }}>
          <Title title={t("selectPackage")} />
          {packages.map((item) => (
            <View style={styles.wrapper}>
              <View key={item.id} style={styles.packageContainer}>
                <Text
                  fontSize={16}
                  color="#393B40"
                  style={{ marginBottom: 21, fontFamily: "monseratBold" }}
                >
                  {item.name}
                </Text>

                {item.passport_description.map((item) => (
                  <View style={styles.description}>
                    <Tick />

                    <Text fontSize={16} color="#393B40">
                      {item.description}
                    </Text>
                  </View>
                ))}

                <View style={styles.price}>
                  <Text
                    fontSize={18}
                    color={"#393B40"}
                    fontWeight={700}
                    style={{ fontFamily: "main-bold" }}
                  >
                    Price
                  </Text>
                  <Text
                    fontSize={32}
                    color={"#393B40"}
                    style={{ fontFamily: "main-bold" }}
                  >
                    {item.price} GEL
                  </Text>
                </View>
                <Text marginTop={17} marginBottom={41} style={styles.seeMore}>
                  See Details
                </Text>
              </View>
              <Pressable style={styles.button}>
                <Text
                  fontSize={18}
                  color="#393B40"
                  style={{ fontFamily: "main-bold" }}
                >
                  Buy Now
                </Text>
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </Container>
  );
}

export default WinePassport;

const styles = StyleSheet.create({
  imageContainer: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  wrapper: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#D3D5E0",
    marginBottom: 16,
  },
  packageContainer: {
    paddingHorizontal: 30,
    paddingTop: 38,
  },
  description: { marginTop: 17, flexDirection: "row", gap: 20 },
  price: {
    gap: 13,
    flexDirection: "row",
    marginTop: 40,
    alignItems: "center",
  },
  seeMore: {
    color: "#3A3D43",
    textDecorationLine: "underline",
    letterSpacing: "0.7",
    fontFamily: "monseratMedium",
  },
  button: {
    backgroundColor: "rgba(35, 46, 102, 0.05)",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 28,
  },
});
