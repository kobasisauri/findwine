import { Image, View, StyleSheet, ScrollView } from "react-native";
import { t } from "../translation";
import NavigationHeader from "../components/parts/navigation/navigationHeader";
import Container from "../components/shared/Container";
import Title from "../components/shared/Title";
import { BrandPocket, Cup, Glass, Map } from "../components/Icons";
import DescriptionCards from "../components/shared/DescriptionCards";

function WinePassport() {
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

        <View style={{ marginTop: 50 }}>
          <Title title={t("selectPackage")} />
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
});
