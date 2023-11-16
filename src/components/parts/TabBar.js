import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Box } from "native-base";
import { HomeTab, MapTab, PitcherTab, Calendar } from "../Icons";

const BottomIcon = ({ routeKey, color }) => {
  if (routeKey === "TabsMain") {
    return <HomeTab color={color} />;
  }
  if (routeKey === "TabsMaps") {
    return <MapTab color={color} />;
  }
  if (routeKey === "TabsWine") {
    return <PitcherTab color={color} />;
  }
  if (routeKey === "TabsEvents") {
    return <Calendar color={color} />;
  }
  return null;
};

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

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
            onPress={onPress}
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
});
