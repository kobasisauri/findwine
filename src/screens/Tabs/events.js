import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { t } from "../../translation";
import NavigationHeader from "../../components/parts/navigation/navigationHeader";
import Container from "../../components/shared/Container";
import Title from "../../components/shared/Title";
import { getEvents } from "../../services/events";
import Text from "../../components/shared/Text";
import { Location } from "../../components/Icons";
import OutlinedButton from "../../components/shared/OutlinedButton";
import { months } from "../../constants/date";
import Loader from "../../components/shared/Loader";
import Dropdown from "../../components/shared/Dropdown";

function Events() {
  const navigation = useNavigation();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getEvents().then((res) => {
      setEvents(res);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <NavigationHeader title={t("events")} tab />
      {loading ? (
        <Loader />
      ) : (
        <ScrollView>
          <Title title={t("upcomingEvent")} />

          <View style={{ paddingHorizontal: 14 }}>
            <View>
              {/* <Text>Category: </Text> */}
              <Dropdown
                placeholderText="All"
                dark={true}
                multiple={true}
                data={[
                  { label: "asd", value: 1 },
                  { label: "asd2", value: 2 },
                  { label: "asd2", value: 3 },
                  { label: "asd2", value: 2 },
                  { label: "asd", value: 1 },
                  { label: "asd2", value: 2 },
                  { label: "asd2", value: 2 },
                  { label: "asd2", value: 3 },
                  { label: "asd2", value: 2 },
                  { label: "asd", value: 1 },
                  { label: "asd2", value: 2 },
                ]}
              />
            </View>
            {!!events &&
              events.map((item, i) => (
                <View key={i} style={styles.eventContainer}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{
                        uri: "https://findwines.ge" + item.img_path,
                        headers: { Authorization: "Basic d2luZToxNTk=" },
                      }}
                      alt="events"
                      style={{ height: 192 }}
                    />

                    <View style={styles.dateContainer}>
                      <Text color="#000" fontSize={22}>
                        {months[item.date.split("-")[1]]}
                      </Text>
                      <Text color="#000" fontSize={36}>
                        {item.date.split("-")[2]}
                      </Text>
                      <Text color="rgba(0, 0, 0, 0.30)" fontSize={20}>
                        {item.date.split("-")[0]}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.description}>
                    <Text
                      fontSize={24}
                      color="#393B40"
                      style={{ fontFamily: "monseratBold" }}
                    >
                      {item.event_name}
                    </Text>
                    <Text
                      fontSize={20}
                      color="#B44D2D"
                      style={{ fontFamily: "monseratBold" }}
                    >
                      {item.company}
                    </Text>

                    <Text
                      fontSize={16}
                      color="#515459"
                      style={{ fontFamily: "main" }}
                    >
                      {item.description} ...
                    </Text>

                    <Text fontSize={14} color="#515459">
                      {item.event_start} - {item.event_end}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 6,
                        alignItems: "center",
                      }}
                    >
                      <Location width="21" height="24" />
                      <Text color="#727477">
                        {item.city}, {t("georgia")}
                      </Text>
                    </View>
                    <OutlinedButton
                      style={{ width: "50%" }}
                      buttonTextStyle={{
                        color: "#3A3D43",
                        fontFamily: "monsterat",
                      }}
                      onPress={() =>
                        navigation.navigate("event-details", { id: item.id })
                      }
                    >
                      {t("moreDetails")}
                    </OutlinedButton>
                  </View>
                </View>
              ))}
          </View>
        </ScrollView>
      )}
    </Container>
  );
}

export default Events;

const styles = StyleSheet.create({
  eventContainer: {},
  imageContainer: {
    position: "relative",
  },
  dateContainer: {
    position: "absolute",
    borderRadius: 8,
    borderColor: "#D6D6D6",
    backgroundColor: "#fff",
    borderWidth: 1,
    bottom: -22,
    width: 138,
    height: 118,
    justifyContent: "center",
    alignItems: "center",
    left: 23,
  },
  description: {
    marginTop: 50,
    paddingHorizontal: 23,
    gap: 19,
    marginBottom: 60,
  },
});
