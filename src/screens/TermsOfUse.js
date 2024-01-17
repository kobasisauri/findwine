import { StyleSheet, ScrollView, View } from "react-native";
import { t } from "../translation";
import NavigationHeader from "../components/parts/navigation/navigationHeader";
import Container from "../components/shared/Container";
import Text from "../components/shared/Text";

function TermsOfUse() {
  return (
    <Container style={{ backgroundColor: "#F2F2F2" }}>
      <NavigationHeader title={t("termsOfUse")} />
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{t("termsOfUse")}</Text>
        </View>

        <View style={styles.container}>
          <Text marginBottom={30}>
            1.
            <Text
              style={{
                fontFamily: "main-bold",

                textDecorationLine: "underline",
              }}
            >
              {" "}
              www.Findwines.ge{" "}
            </Text>
            (hereinafter the site) is the property of Wineshop. Wineshop
            reserves the right to modify these terms and conditions at any time
            without prior notice.
          </Text>

          <Text marginBottom={30}>
            2. By sending the application, applicants confirm that they agree to
            the
            <Text style={{ fontFamily: "main-bold" }}> terms of use</Text>
            of the site.
          </Text>
          <Text marginBottom={30}>
            3.  By submitting the application, applicants agree to receive
            communication emails from the site.
          </Text>
          <Text marginBottom={30}>
            4.  The material published on the site may contain inaccuracies for
            which the site administration
            <Text style={{ fontFamily: "main-bold" }}>
              {" "}
              is not responsible.
            </Text>
          </Text>
          <Text marginBottom={30}>
            5. The site includes external links, the content of which, as well
            as the accuracy and timeliness of the information, are
            <Text style={{ fontFamily: "main-bold" }}>
              {" "}
              beyond Wineshop's responsibility.
            </Text>
          </Text>
          <Text marginBottom={30}>
            6.  The material published on the site is informative and
            educational in nature and its use for any
            <Text style={{ fontFamily: "main-bold" }}>
              {" "}
              illegal actions is prohibited.
            </Text>
          </Text>
          <Text marginBottom={30}>
            7. A passport purchased by users is registered and
            <Text style={{ fontFamily: "main-bold" }}>
              {" "}
              cannot be transferred to another person or returned.
            </Text>
          </Text>
          <Text marginBottom={30}>
            8.  Purchase of a wine passport is allowed only for an adult who has
            reached the
            <Text style={{ fontFamily: "main-bold" }}> age of 18.</Text>
          </Text>
          <Text marginBottom={30}>
            9.  Validity of a wine passport may be revoked upon prior notice if
            the Wineshop becomes convinced that the information obtained during
            the purchase of the wine passport was not true.
          </Text>
          <Text marginBottom={30}>
            10. Data about partners published on the site may change without
            prior notice.
          </Text>
          <Text marginBottom={30}>
            11. Wineshop is not responsible for changes to the terms of service
            that partner organizations may make without prior agreement with
            Wineshop and advises users to contact partner companies directly.
          </Text>
          <Text marginBottom={30}>
            12.  Features published on the site (logos and not only) are the
            intellectual property of Wineshop and their use is not allowed
            without prior permission.
          </Text>
          <Text marginBottom={30}>
            13.  Wineshop
            <Text style={{ fontFamily: "main-bold" }}> is not responsible</Text>
            for any direct or indirect losses that may occur to users
            (applicants?) when purchasing a wine passport.
          </Text>
          <Text marginBottom={30}>
            14. Wineshop is obliged
            <Text style={{ fontFamily: "main-bold" }}>
              {" "}
              not to disclose personal information
            </Text>
            of passport holders and not to share it with third parties for
            commercial or personal purposes.
          </Text>
          <Text marginBottom={30}>
            15. In case of any dissatisfaction, users can write to us at the
            address:
            <Text style={{ fontFamily: "main-bold" }}> info@winshop.ge</Text>
          </Text>
          <Text marginBottom={30}>
            16. Relations and disputes between Wineshop and wine passport
            holders are governed by the
            <Text style={{ fontFamily: "main-bold" }}> laws of Georgia.</Text>
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
