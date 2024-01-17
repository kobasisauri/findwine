import { StyleSheet, ScrollView, View } from "react-native";
import { t } from "../translation";
import NavigationHeader from "../components/parts/navigation/navigationHeader";
import Container from "../components/shared/Container";
import Text from "../components/shared/Text";

function TermsOfUse() {
  return (
    <Container style={{ backgroundColor: "#F2F2F2" }}>
      <NavigationHeader title={t("tersmOfUse")} />
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{t("tersmOfUse")}</Text>
        </View>

        <View style={styles.container}>
          <Text marginBottom={30}>
            1. www.Findwines.ge (hereinafter the site) is the property of
            Wineshop. Wineshop reserves the right to modify these terms and
            conditions at any time without prior notice.
          </Text>
        </View>
      </ScrollView>
    </Container>
  );
}

export default TermsOfUse;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingVertical: 31,
  },
  headerTitle: {
    color: "#2F3238",
    fontSize: 20,
    fontWeight: 700,
    fontFamily: "monseratBold",
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 15,
    marginBottom: 39,
    backgroundColor: "white",
  },
});
