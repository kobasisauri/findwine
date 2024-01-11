import { useEffect, useState, useRef } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Image } from "native-base";
import { t } from "../translation";
import NavigationHeader from "../components/parts/navigation/navigationHeader";
import Container from "../components/shared/Container";
import { getWinery, getRegionWinery } from "../services/wineries";
import Loader from "../components/shared/Loader";
import Text from "../components/shared/Text";
import Ranking from "../components/shared/Ranking";
import { default as WineryItems } from "../components/shared/Winery";
import { MapMarkerOne } from "../components/Icons";

function Winery({ route }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [ranking, setRanking] = useState(0);
  const [otherRegionData, setOtherRegionData] = useState([]);
  const [standardizedData, setStandardizedData] = useState([]);
  const scrollRef = useRef();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }, [scroll]);

  useEffect(() => {
    if (route?.params?.id) {
      setLoading(true);
      getWinery(route?.params?.id)
        .then((res) => {
          if (res) {
            setData(res);
            setRanking(res.raiting);
          }

          return getRegionWinery();
        })
        .then((res) => {
          if (res) {
            setOtherRegionData(res);
          }
          setLoading(false);
        });
    }
  }, [route?.params?.id]);

  useEffect(() => {
    if (otherRegionData.length && data) {
      setStandardizedData(
        otherRegionData?.filter((item) => item.region_name === data?.region)[0]
      );
    }
  }, [data, otherRegionData?.length]);

  return (
    <Container>
      <NavigationHeader title={data ? data.company : t("wineries")} />

      {loading && !data ? (
        <Loader />
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef}>
            {data?.img_path && (
              <Image
                source={{
                  uri: "https://findwines.ge" + data?.img_path,
                  headers: { Authorization: "Basic d2luZToxNTk=" },
                }}
                alt="winerie"
                style={{ height: 224 }}
              />
            )}

            <View style={{ paddingHorizontal: 16 }}>
              <View style={styles.rankingWrapper}>
                <Ranking
                  rate={ranking || 0}
                  setRate={(num) => setRanking(num)}
                />
                <Text marginLeft={15}>({ranking || 0} out 5)</Text>
              </View>
              {!!data?.description && (
                <>
                  <Text style={styles.title}>{t("introduction")}</Text>
                  <Text marginBottom={30}>{data?.description || ""}</Text>
                </>
              )}
              {!!data?.awards.length && (
                <View marginBottom={30}>
                  <Text style={styles.title}>{t("awardsWon")}</Text>

                  {data.awards.map((item) => (
                    <Text marginBottom={9} key={item.id}>
                      {item.name}
                    </Text>
                  ))}
                </View>
              )}
              {!!data?.products.length && (
                <>
                  <Text style={styles.title}>{t("ourWines")}</Text>

                  {data?.products.map((item, i) => (
                    <View key={i} style={styles.wineContainer}>
                      <View>
                        <Image
                          source={{
                            uri: `https://findwines.ge${
                              item.img_link[0] === "/"
                                ? item.img_link
                                : `/${item.img_link}`
                            }`,
                            headers: { Authorization: "Basic d2luZToxNTk=" },
                          }}
                          alt="bottle"
                          height={250}
                          width={94}
                        />
                      </View>
                      <View>
                        <Text style={styles.wineTitle}>{item.name}</Text>
                        <Text color="#464645" marginBottom={13}>
                          {item.color}
                        </Text>
                        <Text color="#939673" marginBottom={9}>
                          {item.breed}
                        </Text>
                        <Text color="#A7A7A7" font marginBottom={18}>
                          {item.wine_type}
                        </Text>

                        <Text style={styles.winePrice} uppercase>
                          $19.99
                        </Text>
                      </View>
                    </View>
                  ))}
                </>
              )}

              {!!data && !!data?.location && (
                <>
                  <Text style={[styles.title, { marginTop: 70 }]}>
                    {t("location")}
                  </Text>

                  <View
                    style={{
                      height: 364,
                      paddingVertical: 8,
                      paddingHorizontal: 5,
                    }}
                  >
                    <MapView
                      provider={PROVIDER_GOOGLE}
                      style={{
                        width: "100%",
                        height: "100%",
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
                          latitude: +data.location.lat,
                          longitude: +data.location.lng,
                        }}
                      >
                        <MapMarkerOne />
                      </Marker>
                    </MapView>
                  </View>
                </>
              )}

              {/* {!!standardizedData && (
                <>
                  <Text style={[styles.title, { marginTop: 70 }]}>
                    {t("otherWineriesIn")} {data?.region}
                  </Text>

                  <FlatList
                    // data={
                    //   (!!standardizedData &&
                    //     standardizedData[0]?.winners.filter(
                    //       (item) => item?.id !== data?.id
                    //     )) ||
                    //   []
                    // }
                    data={standardizedData?.winners || []}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                      <WineryItems item={item} setScroll={setScroll} />
                    )}
                  />
                </>
              )} */}
            </View>
          </ScrollView>
        </>
      )}
    </Container>
  );
}

export default Winery;

const styles = StyleSheet.create({
  rankingWrapper: {
    marginVertical: 33,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontFamily: "monseratBold",
    marginBottom: 8,
  },
  wineContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    borderBottomColor: "#DEDEDE",
    borderBottomWidth: 1,
    marginTop: 25,
    paddingBottom: 40,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  wineTitle: {
    fontSize: 18,
    color: "#B44D2D",
    marginBottom: 14,
  },
  winePrice: {
    fontSize: 18,
    color: "#27242C",
    fontFamily: "monseratBold",
  },
});
