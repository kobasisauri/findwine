import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { Image } from "native-base";
import { t } from "../translation";
import NavigationHeader from "../components/parts/navigation/navigationHeader";
import Container from "../components/shared/Container";
import { getWinery } from "../services/wineries";
import Loader from "../components/shared/Loader";
import Text from "../components/shared/Text";

function Winery({ route }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (route?.params?.id) {
      setLoading(true);
      getWinery(route?.params?.id).then((res) => {
        setData(res);
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
          <Image
            source={{
              uri: "https://staging.findwines.ge" + data?.img_path,
              headers: { Authorization: "Basic d2luZToxNTk=" },
            }}
            alt="winerie"
            style={{ height: 224, marginBottom: 37 }}
          />

          <View style={{ paddingHorizontal: 16 }}>
            {data?.description && (
              <>
                <Text style={styles.title}>{t("introduction")}</Text>
                <Text>{data.description}</Text>
              </>
            )}

            {data?.awards.length && (
              <>
                <Text style={styles.title}>{t("awardsWon")}</Text>

                {data.awards.map((item) => (
                  <Text marginBottom={9}>{item.award}</Text>
                ))}
              </>
            )}

            <Text style={styles.title}>
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
  title: {
    fontSize: 22,
    fontFamily: "monseratBold",
    marginBottom: 8,
  },
});
