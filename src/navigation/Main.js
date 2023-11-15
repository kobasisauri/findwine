import { SafeAreaView, StyleSheet, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TabsScreen from "../screens/TabsScreen";

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

const RootApp = () => {
  if (Platform.OS === "android") {
    return (
      <SafeAreaView style={styles.AndroidSafeArea}>
        <TabsScreen />
      </SafeAreaView>
    );
  }
  return <TabsScreen />;
};

export default function Main() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <RootApp />
    </SafeAreaProvider>
  );
}
