import { Modal } from "native-base";
import { useEffect, useState } from "react";
import { StyleSheet, Pressable, ScrollView, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Close, FilterIcon, MapMarker, Search } from "../../components/Icons";
import NavigationHeader from "../../components/parts/navigation/navigationHeader";
import Button from "../../components/shared/Button";
import CheckboxField from "../../components/shared/CheckBox";
import Container from "../../components/shared/Container";
import TextInput from "../../components/shared/Input";
import Text from "../../components/shared/Text";
import Title from "../../components/shared/Title";
import { getRegionWiners } from "../../services/wineries";
import { t } from "../../translation";

const inputColor = "rgba(255,255,255,0.091)";

function OrdersScreen() {
  const [locationData, setLocationData] = useState([]);
  const [openFiler, setOpenFiler] = useState(false);

  useEffect(() => {
    getRegionWiners().then((res) => {
      let winners = [];

      res.forEach((item) => {
        if (item.winners.length) {
          item.winners.forEach((i) => {
            winners.push(i);
          });
        }
      });
      setLocationData(winners);
    });
  }, []);

  return (
    <Container>
      <NavigationHeader title={t("map")} tab />
      <Title title={t("georgianWineries")} />

      <ScrollView>
        <View style={styles.mapContainer}>
          <Pressable
            style={styles.filterButton}
            onPress={() => setOpenFiler(true)}
          >
            <FilterIcon />
          </Pressable>

          <MapView
            style={{
              width: "100%",
              height: 500,
            }}
            initialRegion={{
              latitude: 42.3154,
              longitude: 43.3569,
              latitudeDelta: 7,
              longitudeDelta: 7,
            }}
          >
            {!!locationData?.length &&
              locationData.map((data, index) => (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: data.location.lat,
                    longitude: data.location.lng,
                  }}
                  title={data.name}
                  description={data.description}
                >
                  <MapMarker />
                </Marker>
              ))}
          </MapView>
        </View>
      </ScrollView>

      {openFiler && (
        <Modal isOpen={openFiler} onClose={() => setOpenFiler(false)} size="xl">
          <Modal.Content
            style={{ borderRadius: 4, backgroundColor: "#292C31" }}
          >
            <Modal.Body>
              <View style={styles.close}>
                <Close onPress={() => setOpenFiler(false)} color="#fff" />
              </View>

              <Text style={styles.title} color="#fff">
                {t("findOnMap")}
              </Text>

              <TextInput
                placeholder={t("search")}
                suf={<Search color="#fff" />}
                containerStyle={{ backgroundColor: inputColor }}
                style={{ color: "#fff" }}
              />

              <CheckboxField
                checked={true}
                label={t("organicProducer")}
                containerStyles={{ marginBottom: 30 }}
                dark
              />

              <View style={{ width: "50%" }}>
                <Button>{t("search")}</Button>
              </View>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      )}
    </Container>
  );
}

export default OrdersScreen;

const styles = StyleSheet.create({
  mapContainer: {
    position: "relative",
    marginHorizontal: 16,
    paddingBottom: 16,
  },
  filterButton: {
    position: "absolute",
    zIndex: 9,
    top: 29,
    left: 0,
    backgroundColor: "#292C31",
    paddingLeft: 15,
    paddingRight: 18,
    paddingVertical: 13,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  close: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
});
