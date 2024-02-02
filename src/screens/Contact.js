import { useState } from "react";
import { t } from "../translation";
import NavigationHeader from "../components/parts/navigation/navigationHeader";
import Container from "../components/shared/Container";
import { ScrollView, View } from "native-base";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import Title from "../components/shared/Title";
import Text from "../components/shared/Text";
import TextInput from "../components/shared/Input";
import Button from "../components/shared/Button";

import {
  ContactMessage,
  ContactMap,
  ContactPhone,
  MapMarker,
} from "../components/Icons";

function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  return (
    <Container>
      <NavigationHeader title={t("contact")} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Title title={t("contact")} />

        <View style={{ paddingHorizontal: 12, paddingBottom: 38 }}>
          <Text style={{ width: 337, lineHeight: 24, marginBottom: 16 }}>
            {t("contactText")}
          </Text>

          <View>
            <View style={{ flexDirection: "row", gap: 20, marginBottom: 15 }}>
              <ContactMap />
              <View>
                <Text color="#8E8E93" marginBottom={2}>
                  {t("officeAddress")}
                </Text>
                <Text fontSize={16}>{t("AddressTbilisi")}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", gap: 20, marginBottom: 15 }}>
              <ContactPhone />
              <View>
                <Text color="#8E8E93" marginBottom={2}>
                  {t("requestCallBack")}
                </Text>
                <Text fontSize={16}>314-555-0123</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", gap: 20, marginBottom: 35 }}>
              <ContactMessage />
              <View>
                <Text color="#8E8E93" marginBottom={2}>
                  {t("emailUs")}
                </Text>
                <Text fontSize={16}>hellosupport@gmail.com</Text>
              </View>
            </View>
          </View>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{
              width: 350,
              height: 350,
            }}
            initialRegion={{
              latitude: 42.3154,
              longitude: 43.3569,
              latitudeDelta: 7,
              longitudeDelta: 7,
            }}
          >
            <Marker
              coordinate={{
                latitude: 41.707308007892166,
                longitude: 44.74907684403442,
              }}
            >
              <MapMarker />
            </Marker>
          </MapView>
        </View>
        <View style={{ backgroundColor: "#F1F1F3", paddingHorizontal: 12 }}>
          <Title title={t("contactForm")} />
          <View
            style={{
              backgroundColor: "#fff",
              width: "100%",
              paddingHorizontal: 18,
              borderRadius: 4,
              paddingTop: 20,
              paddingBottom: 60,
              marginBottom: 76,
            }}
          >
            <Text fontSize={16} color="#1C1C1E" marginBottom={7}>
              {t("name")}
            </Text>
            <TextInput
              value={values.name}
              onChangeText={(val) => {
                setValues((prev) => ({ ...prev, name: val }));
              }}
              placeholder={t("yourName")}
              style={{ color: "#fff" }}
            />

            <Text fontSize={16} color="#1C1C1E" marginBottom={7}>
              {t("email")}
            </Text>
            <TextInput
              value={values.email}
              onChangeText={(val) => {
                setValues((prev) => ({ ...prev, email: val }));
              }}
              placeholder={t("yourEmail")}
              style={{ color: "#fff" }}
            />

            <Text fontSize={16} color="#1C1C1E" marginBottom={7}>
              {t("message")}
            </Text>
            <TextInput
              value={values.message}
              onChangeText={(val) => {
                setValues((prev) => ({ ...prev, message: val }));
              }}
              placeholder={t("yourMessage")}
              style={{ color: "#fff" }}
            />

            <Button
              style={{ width: "55%", marginTop: 36 }}
              onPress={() => {
                //someapi(values).then((res)=>{console.log(res)})
              }}
            >
              {t("send")}
            </Button>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}

export default Contact;
