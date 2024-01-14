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

  const [values, setValues] = useState({
    search: "",
    organic: false,
    regions: "",
    wineTypes: "",
    origin: "",
  });

  useEffect(() => {
    setLoading(true);
    getWineries().then((res) => {
      setData(res);
      setFileredData(res);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <NavigationHeader title={t("wineries")} />

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 16,
          marginTop: 30,
        }}
      >
        <Input
          value={values.search}
          onChangeText={(val) => {
            setValues((prev) => ({ ...prev, search: val }));
          }}
          placeholder={t("search")}
          returnKeyType="search"
          onSubmitEditing={() => {
            setFileredData(
              data.filter((item) => item.company.includes(values.search))
            );
            console.log(1);
          }}
          suf={<Search />}
        />
      </View>

      {loading ? (
        <Loader />
      ) : (
        <View
          style={{
            paddingHorizontal: 16,
            marginBottom: 150,
            marginTop: 20,
          }}
        >
          <FlatList
            data={filteredData}
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
