import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { MapMarker } from "../../components/Icons";
import NavigationHeader from "../../components/parts/navigation/navigationHeader";
import Container from "../../components/shared/Container";
import Title from "../../components/shared/Title";
import { getRegionWiners } from "../../services/wineries";
import { t } from "../../translation";

function OrdersScreen() {
  const [locationData, setLocationData] = useState([]);

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
        <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
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
    </Container>
  );
}

export default OrdersScreen;
