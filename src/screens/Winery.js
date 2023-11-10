import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { Image } from "native-base";
import { t } from "../translation";
import NavigationHeader from "../components/parts/navigation/navigationHeader";
import Container from "../components/shared/Container";
import { getWinery } from "../services/wineries";
import Loader from "../components/shared/Loader";
import Text from "../components/shared/Text";
import Ranking from "../components/shared/Ranking";

function Winery({ route }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [ranking, setRanking] = useState(0);

  useEffect(() => {
    if (route?.params?.id) {
      setLoading(true);
      getWinery(route?.params?.id).then((res) => {
        if (res) {
          setData(res);
          setRanking(res.raiting);
        }

        setLoading(false);
      });
    }
  }, [route?.params?.id]);

  return (
    <Container>
      <NavigationHeader title={data ? data.company : t("wineries")} />

      {loading && !data ? (
        <Loader />
      ) : (
        <ScrollView showsVerticalScrollIndicator="false">
          {data?.img_path && (
            <Image
              source={{
                uri: "https://staging.findwines.ge" + data?.img_path,
                headers: { Authorization: "Basic d2luZToxNTk=" },
              }}
              alt="winerie"
              style={{ height: 224 }}
            />
          )}

          <View style={{ paddingHorizontal: 16 }}>
            <View style={styles.rankingWrapper}>
              <Ranking rate={ranking || 0} setRate={(num) => setRanking(num)} />
              <Text marginLeft={15}>({ranking || 0} out 5)</Text>
            </View>

            {data?.description && (
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
                          uri: "https://staging.findwines.ge" + item.img_link,
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

            <Text style={[styles.title, { marginTop: 70 }]}>
              {t("otherWineriesIn")} {data?.region}
            </Text>
          </View>
        </ScrollView>
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
