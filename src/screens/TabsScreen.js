import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import HomeScreen from "./Tabs/home";
import NavgationScreen from "./Tabs/navigation";
import WineScreen from "./Tabs/wine";
import MapScreen from "./Tabs/map";
import EventsScreen from "./Tabs/events";

import TabBar from "../components/parts/TabBar";
import WinePassport from "./WinePassport";
import PackageDetails from "./PackageDetails";
import WineriesScreen from "./Wineries";
import WinerySreen from "./Winery";
import Events from "./Events";
import Contact from "./Contact";
import Profile from "./Profile";
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
      <Stack.Screen name="navigation" component={NavgationScreen} />
      <Stack.Screen name="wineries" component={WineriesScreen} />
      <Stack.Screen name="winery" component={WinerySreen} />
      <Stack.Screen name="event-details" component={EventDetails} />
      <Stack.Screen name="contact" component={Contact} />
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
};

function TabsScreen() {
  const [landData, setLangData] = useState("");
  const { lang } = useSelector((state) => state.authReducer);

  useEffect(() => {
    setLangData(lang);
  }, [lang]);

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
        options={{ landData, title: "" }}
        component={HomeNavigation}
      />

      <Tab.Screen
        name="TabsMaps"
        options={{ landData, title: "" }}
        component={MapScreen}
      />

      <Tab.Screen
        name="TabsProfile"
        options={{ landData, title: "" }}
        component={WineScreen}
      />

      <Tab.Screen
        name="TabsEvents"
        options={{ landData, title: "" }}
        component={EventsNavigation}
      />
    </Tab.Navigator>
  );
}

export default TabsScreen;
