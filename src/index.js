import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, View } from "native-base";
import { useFonts } from "expo-font";
import { Root } from "react-native-alert-notification";
import Main from "./navigation/Main";
import Notification from "./components/shared/Notification";

export default function App() {
  const [loaded] = useFonts({
    main: require("./assets/fonts/Lato/Lato-Regular.ttf"),
    "main-bold": require("./assets/fonts/Lato/Lato-Bold.ttf"),

    monsterat: require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    monseratBold: require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
    monseratMedium: require("./assets/fonts/Montserrat/Montserrat-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <NativeBaseProvider>
        <StatusBar
          animated
          backgroundColor="transparent"
          barStyle="dark-content"
          showHideTransition="fade"
          hidden={false}
        />
        <NavigationContainer>
          <Root>
            <View
              style={{
                backgroundColor: "#fff",
                flex: 1,
                paddingBottom: 0,
              }}
            >
              <Main />
            </View>
          </Root>
        </NavigationContainer>
      </NativeBaseProvider>
      <Notification />
    </>
  );
}
