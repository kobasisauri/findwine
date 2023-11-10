import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { t } from "../translation";
import NavigationHeader from "../components/parts/navigation/navigationHeader";
import Container from "../components/shared/Container";
import { getWineries } from "../services/wineries";
import Loader from "../components/shared/Loader";
import Winery from "../components/shared/Winery";
import Input from "../components/shared/Input";
import { Search } from "../components/Icons";

function Wineries() {
  const [data, setData] = useState([]);
  const [filteredData, setFileredData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getWineries().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <NavigationHeader title={t("wineries")} />

      {/* <View style={{ paddingHorizontal: 16, marginBottom: 21, marginTop: 50 }}>
        <Input
          placeholder={t("search")}
          suf={
            <View style={{ width: 80, backgroundColor: "red" }}>
              <Search />
            </View>
          }
        />
      </View> */}

      {loading ? (
        <Loader />
      ) : (
        <View
          style={{ paddingHorizontal: 16, marginBottom: 50, marginTop: 20 }}
        >
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Winery item={item} />}
          />
        </View>
      )}
    </Container>
  );
}

export default Wineries;

const styles = StyleSheet.create({});
