import { Box, Modal } from "native-base";
import { useEffect, useState } from "react";
import { StyleSheet, Pressable, ScrollView, Image, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Close, FilterIcon, MapMarker, Search } from "../../components/Icons";
import NavigationHeader from "../../components/parts/navigation/navigationHeader";
import Button from "../../components/shared/Button";
import CheckboxField from "../../components/shared/CheckBox";
import Container from "../../components/shared/Container";
import TextInput from "../../components/shared/Input";
import Text from "../../components/shared/Text";
import Dropdown from "../../components/shared/Dropdown";
import Title from "../../components/shared/Title";
import { getRegionWiners } from "../../services/wineries";
import { t } from "../../translation";
import { getCities, getRegions, getWineTypes } from "../../services/dropdowns";
import { regions } from "../../constants/regions";
import georgiaLight from "../../assets/img/Regions/Abk_dark.png";

const inputColor = "rgba(255,255,255,0.091)";

function OrdersScreen() {
  const [active, setActive] = useState("Georgia");
  const [locationData, setLocationData] = useState([]);
  const [openFiler, setOpenFiler] = useState(false);
  const [data, setData] = useState({
    cities: [],
    regions: [],
    wineTypes: [],
  });
  const [values, setValues] = useState({
    cities: "",
    regions: "",
    wineTypes: "",
  });

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

  useEffect(() => {
    getWineTypes()
      .then((res) => {
        const transform = res.map((item) => ({
          value: item.id,
          label: item.name,
        }));
        setData((prevData) => ({
          ...prevData,
          wineTypes: transform,
        }));
        return getRegions();
      })
      .then((res) => {
        const transform = res.map((item) => ({
          value: item.id,
          label: item.name,
        }));
        setData((prevData) => ({
          ...prevData,
          regions: transform,
        }));
        return getCities();
      })
      .then((res) => {
        const transform = res.map((item) => ({
          value: item.id,
          label: item.name,
        }));
        setData((prevData) => ({
          ...prevData,
          cities: transform,
        }));
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

        <ScrollView
          horizontal={true}
          style={{ marginHorizontal: 16, paddingBottom: 15, marginBottom: 15 }}
        >
          <Box style={{ flexDirection: "row", gap: 12 }}>
            {regions.map((item) => (
              <Pressable key={item.title} onPress={() => setActive(item.title)}>
                <Image
                  source={active === item.title ? item.activeImg : item.img}
                  alt="test"
                  resizeMode="cover"
                  style={{ height: 113, width: 122 }}
                />
              </Pressable>
            ))}
          </Box>
        </ScrollView>
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

              <Text style={styles.desc} color="#fff">
                {t("byRegions")}
              </Text>
              <Dropdown
                containerStyle={{ flex: 1 }}
                placeholderText="All regions"
                dark={true}
                data={!!data.regions && data.regions}
                value={values.regions}
                onChange={(item) => {
                  setValues((prev) => ({ ...prev, regions: item.value }));
                }}
              />

              <Text style={styles.desc} color="#fff">
                {t("byWineType")}
              </Text>
              <Dropdown
                containerStyle={{ flex: 1 }}
                placeholderText="All Types"
                dark={true}
                data={!!data.wineTypes && data.wineTypes}
                value={values.wineTypes}
                onChange={(item) => {
                  setValues((prev) => ({ ...prev, wineTypes: item.value }));
                }}
              />

              <Text style={styles.desc} color="#fff">
                {t("byOerroirs")}
              </Text>
              <Dropdown
                containerStyle={{ flex: 1 }}
                placeholderText="All Origins"
                dark={true}
                data={!!data.cities && data.cities}
                value={values.cities}
                onChange={(item) => {
                  setValues((prev) => ({ ...prev, cities: item.value }));
                }}
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
  desc: {
    marginBottom: 12,
  },
});
