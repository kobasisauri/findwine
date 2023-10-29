import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import { SafeAreaView, StyleSheet } from "react-native";
import HomeScreen from "./Tabs/home";
import ProfileScreen from "./Tabs/profile";
import WineScreen from "./Tabs/wine";
import MapScreen from "./Tabs/map";
import TabBar from "../components/parts/TabBar";

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

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
        component={HomeScreen}
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
