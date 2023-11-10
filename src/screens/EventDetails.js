import { useEffect, useState } from "react";
import { View, Image, StyleSheet, ScrollView, Pressable } from "react-native";
import { t } from "../translation";
import NavigationHeader from "../components/parts/navigation/navigationHeader";
import Container from "../components/shared/Container";
import { getEvent } from "../services/events";
import Text from "../components/shared/Text";
import { Location, Clock, ArrowRight } from "../components/Icons";

const months = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  10: "October",
  11: "November",
  12: "December",
};

function EventDetails({ route }) {
  const [eventDetails, setEventDetails] = useState({});
  const [seeAll, setSeeAll] = useState(false);

  useEffect(() => {
    if (route.params.id) {
      getEvent(route.params.id).then((res) => {
        console.log(res);
        setEventDetails(res);
      });
    }
  }, []);
  return (
    <Container style={{ backgroundColor: "#fff" }}>
      <NavigationHeader title={t("wineFestival")} />
      <ScrollView>
        <Image
          source={{
            uri: "https://staging.findwines.ge" + eventDetails.img_path,
            headers: { Authorization: "Basic d2luZToxNTk=" },
          }}
          alt="events"
          style={{ height: 229 }}
        />
        <View style={styles.heading}>
          <Text
            color="#2F3238"
            fontSize={28}
            style={{ fontFamily: "monseratBold" }}
          >
            {eventDetails.event_name}
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.dataWrapper}>
            <View style={styles.dateContainer}>
              <Text color="#B44D2D" fontSize={22}>
                {months[eventDetails?.date?.split("-")[1]]}
              </Text>
              <Text color="#B44D2D" fontSize={36}>
                {eventDetails?.date?.split("-")[2]}
              </Text>
              <Text color="rgba(0, 0, 0, 0.70)" fontSize={16}>
                {eventDetails?.date?.split("-")[0]}
              </Text>
            </View>
            <View gap={19}>
              <View flexDirection="row" alignItems="center">
                <Clock />
                <Text color="#292C31" fontSize={16}>
                  {eventDetails?.event_start} - {eventDetails?.event_end}
                </Text>
              </View>
              <View flexDirection="row" alignItems="center" gap={6}>
                <Location />
                <Text color="#292C31" fontSize={16}>
                  {eventDetails?.city}, {t("georgia")}
                </Text>
              </View>
            </View>
          </View>
          <Text
            fontSize={24}
            marginTop={48}
            color="#3A3D43"
            style={{ fontFamily: "monseratBold" }}
          >
            {t("aboutFestival")}
          </Text>
          <Text fontSize={16} color="rgba(58, 61, 67, 0.60)" marginTop={11}>
            {eventDetails?.description}
          </Text>

          <Text
            fontSize={20}
            marginTop={48}
            color="#3A3D43"
            style={{ fontFamily: "monseratBold" }}
          >
            {t("festivalSupports")}
          </Text>

          <Text fontSize={16} color="rgba(58, 61, 67, 0.60)" marginTop={11}>
            {eventDetails?.company}
          </Text>

          <Text
            fontSize={20}
            marginTop={48}
            color="#3A3D43"
            style={{ fontFamily: "monseratBold" }}
          >
            {t("festivalOrganizers")}
          </Text>

          <Text fontSize={16} color="rgba(58, 61, 67, 0.60)" marginTop={11}>
            {t("georgianWineClub")}
          </Text>

          {!!eventDetails?.support_winer && (
            <View>
              <Text
                fontSize={20}
                marginTop={48}
                color="#3A3D43"
                style={{ fontFamily: "monseratBold" }}
                marginBottom={25}
              >
                {t("participantWineries")}
              </Text>

              {seeAll === false
                ? eventDetails?.support_winer.slice(0, 10).map((item, i) => (
                    <View
                      key={i}
                      flexDirection="row"
                      alignItems="center"
                      gap={13}
                      marginBottom={16}
                    >
                      <ArrowRight />
                      <Text color="#3A3D43" fontSize={16}>
                        {item.company.name}
                      </Text>
                    </View>
                  ))
                : eventDetails?.support_winer.map((item, i) => (
                    <View
                      key={i}
                      flexDirection="row"
                      alignItems="center"
                      gap={13}
                      marginBottom={16}
                    >
                      <ArrowRight />
                      <Text color="#3A3D43" fontSize={16}>
                        {item.company.name}
                      </Text>
                    </View>
                  ))}

              {eventDetails?.support_winer.length > 10 && (
                <Pressable onPress={() => setSeeAll(true)}>
                  <Text
                    fontSize={16}
                    style={{
                      fontFamily: "main-bold",
                      textDecorationLine: "underline",
                    }}
                    marginTop={45}
                  >
                    {t("seeAll")}
                  </Text>
                </Pressable>
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </Container>
  );
}

export default EventDetails;

const styles = StyleSheet.create({
  heading: {
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 13,
    paddingVertical: 21,
  },
  container: {
    paddingHorizontal: 15,
    marginBottom: 50,
  },

  dataWrapper: {
    flexDirection: "row",
    gap: 26,
    alignItems: "center",
    marginTop: 40,
  },

  dateContainer: {
    borderRadius: 8,
    borderColor: "#D6D6D6",
    backgroundColor: "#fff",
    borderWidth: 1,
    width: 138,
    height: 118,
    justifyContent: "center",
    alignItems: "center",
  },
});
