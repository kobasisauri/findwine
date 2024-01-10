import { useState, useEffect } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Box } from "native-base";
import { HomeTab, MapTab, PitcherTab, Calendar } from "../Icons";
import Text from "../../components/shared/Text";
import { getEvents } from "../../services/events";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useStore from "../../stores/store";

const BottomIcon = ({ routeKey, color }) => {
  const [eventNumber, setEventNumver] = useState([]);

  useEffect(() => {
    getEvents().then((res) => {
      setEventNumver(() =>
        res.filter((item) => {
          const eventDate = new Date(item.date);

          return eventDate > new Date();
        })
      );
    });
  }, []);

  if (routeKey === "TabsMain") {
    return <HomeTab color={color} />;
  }
  if (routeKey === "TabsMaps") {
    return <MapTab color={color} />;
  }
  if (routeKey === "TabsProfile") {
    return <PitcherTab color={color} />;
  }
  if (routeKey === "TabsEvents") {
    return (
      <View>
        <View style={styles.eventNumber}>
          <Text
            color="#fff"
            fontSize={12}
            style={{ fontFamily: "monseratBold" }}
          >
            {eventNumber.length}
          </Text>
        </View>
        <Calendar color={color} />
      </View>
    );
  }
  return null;
};

const TabBar = ({ state, descriptors, navigation }) => {
  const { setToken, setUserData, token, setRegisterRequiredModal } = useStore(
    (state) => state
  );

  useEffect(() => {
    async function fetchData() {
      const storageToken = await AsyncStorage.getItem("token");
      const userData = JSON.parse(await AsyncStorage.getItem("userData"));

      if (storageToken) {
        setToken(storageToken);
        setUserData(userData);

        if (userData.role !== "client") {
          navigation.navigate("profile");
        }
      }
    }

    fetchData();
  }, [token]);

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={
              route.name === "TabsProfile" && !token
                ? () => setRegisterRequiredModal(true)
                : onPress
            }
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <Box style={styles.item}>
              <BottomIcon
                routeKey={route.name}
                color={isFocused ? "#000" : "#3A3D4366"}
              />
            </Box>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 48,
    elevation: 2,
  },
  item: {
    position: "relative",
    alignItems: "center",
    paddingTop: 14,
    paddingBottom: 25,
  },
  eventNumber: {
    width: 25,
    height: 25,
    position: "absolute",
    backgroundColor: "#B44D2D",
    zIndex: 8,
    left: -10,
    top: -4,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
