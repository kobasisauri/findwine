import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, View } from "native-base";
import { useFonts } from "expo-font";
import { Root } from "react-native-alert-notification";
import { useSelector } from "react-redux";
import Main from "./navigation/Main";

export default function App() {
  const { isSignedIn } = useSelector((state) => state.authReducer);
  const [loaded] = useFonts({
    main: require("./assets/fonts/Lato/Lato-Regular.ttf"),
    monsterat: require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
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
            <Main isSignedIn={isSignedIn} />
          </View>
        </Root>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
