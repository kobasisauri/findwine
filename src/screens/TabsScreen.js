import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Tabs/home";
import WineScreen from "./Tabs/wine";
import MapScreen from "./Tabs/map";
import EventsScreen from "./Tabs/events";

import TabBar from "../components/parts/TabBar";
import WinePassport from "./WinePassport";
import PackageDetails from "./PackageDetails";
import WineriesScreen from "./Wineries";
import WinerySreen from "./Winery";
import Contact from "./Contact";
import EventDetails from "./EventDetails";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "none",
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="wine-passport" component={WinePassport} />
      <Stack.Screen name="package-details" component={PackageDetails} />
      <Stack.Screen name="events" component={EventsScreen} />
      <Stack.Screen name="event-details" component={EventDetails} />
      <Stack.Screen name="wineries" component={WineriesScreen} />
      <Stack.Screen name="winery" component={WinerySreen} />
      <Stack.Screen name="contact" component={Contact} />
      <Stack.Screen name="profile" component={WineScreen} />
    </Stack.Navigator>
  );
};

const MapNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "none",
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="map" component={MapScreen} />
      <Stack.Screen name="events" component={EventsScreen} />
      <Stack.Screen name="event-details" component={EventDetails} />
      <Stack.Screen name="wineries" component={WineriesScreen} />
      <Stack.Screen name="winery" component={WinerySreen} />
      <Stack.Screen name="contact" component={Contact} />
      <Stack.Screen name="profile" component={WineScreen} />
    </Stack.Navigator>
  );
};

const WineNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "none",
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="profile" component={WineScreen} />
      <Stack.Screen name="events" component={EventsScreen} />
      <Stack.Screen name="event-details" component={EventDetails} />
      <Stack.Screen name="wineries" component={WineriesScreen} />
      <Stack.Screen name="winery" component={WinerySreen} />
      <Stack.Screen name="contact" component={Contact} />
    </Stack.Navigator>
  );
};

const EventsNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "none",
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="events" component={EventsScreen} />
      <Stack.Screen name="event-details" component={EventDetails} />
      <Stack.Screen name="wineries" component={WineriesScreen} />
      <Stack.Screen name="winery" component={WinerySreen} />
      <Stack.Screen name="contact" component={Contact} />
      <Stack.Screen name="profile" component={WineScreen} />
    </Stack.Navigator>
  );
};

function TabsScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
      initialRouteName="TabsMain"
    >
      <Tab.Screen
        name="TabsMain"
        options={{ title: "" }}
        component={HomeNavigation}
      />

      <Tab.Screen
        name="TabsMaps"
        options={{ title: "" }}
        component={MapNavigation}
      />

      <Tab.Screen
        name="TabsProfile"
        options={{ title: "" }}
        component={WineNavigation}
      />

      <Tab.Screen
        name="TabsEvents"
        options={{ title: "" }}
        component={EventsNavigation}
      />
    </Tab.Navigator>
  );
}

export default TabsScreen;
