import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "native-base";
import { t } from "../../translation";
import Text from "./Text";
import OutlinedButton from "./OutlinedButton";
import { FilledStar, WineryLocation } from "../Icons";

function Winery({ item }) {
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      {item.img_path && (
        <Image
          source={{
            uri: "https://staging.findwines.ge" + item.img_path,
            headers: { Authorization: "Basic d2luZToxNTk=" },
          }}
          alt="winerie"
          style={{ height: 224 }}
        />
      )}

      <View style={styles.itemBody}>
        <Text style={styles.title}>{item.company}</Text>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.desc}>
          {item.description}
        </Text>

        <View style={styles.additional}>
          <View style={styles.flexRow}>
            <WineryLocation />
            <Text marginLeft={10}>
              {item.city}, {t("georgia")}
            </Text>
          </View>

          <View style={styles.flexRow}>
            <Text marginRight={10}>{item.raiting}/5</Text>
            <FilledStar filled />
          </View>
        </View>

        <OutlinedButton
          style={{ width: "50%" }}
          buttonTextStyle={{
            color: "#3A3D43",
            fontFamily: "monsterat",
          }}
          onPress={() => navigation.navigate("winery", { id: item.id })}
        >
          {t("learnMore")}
        </OutlinedButton>
      </View>
    </View>
  );
}

export default Winery;

const styles = StyleSheet.create({
  flexRow: { flexDirection: "row", alignItems: "center" },
  item: {
    marginBottom: 26,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#D6D6D6",
  },
  itemBody: {
    paddingHorizontal: 13,
    paddingTop: 19,
    paddingBottom: 23,
  },
  title: {
    fontSize: 18,
    fontFamily: "monseratBold",
    marginBottom: 8,
    color: "#393B40",
  },
  desc: {
    marginBottom: 10,
    color: "#515459",
    fontFamily: "main",
  },
  additional: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },
});
