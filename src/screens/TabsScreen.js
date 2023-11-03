import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import HomeScreen from "./Tabs/home";
import ProfileScreen from "./Tabs/profile";
import WineScreen from "./Tabs/wine";
import MapScreen from "./Tabs/map";
import TabBar from "../components/parts/TabBar";
import WinePassport from "./WinePassport";

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
        name="TabsWine"
        options={{ landData, title: "" }}
        component={WineScreen}
      />

      <Tab.Screen
        name="TabsProfile"
        options={{ landData, title: "" }}
        // options={{ landData, title: t("profile") }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default TabsScreen;