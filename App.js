import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, View } from "native-base";
import { useFonts } from "expo-font";
import { Root } from "react-native-alert-notification";
import Main from "./src/navigation/Main";
import Notification from "./src/components/shared/Notification";
import SignInModal from "./src/components/parts/SignInModal";
import useStore from "./src/stores/store";
import SignUpModal from "./src/components/parts/SignUpModal";
import RegisterRequiredModal from "./src/components/shared/RegisterRequiredModal";

export default function App() {
  const {
    registerRequredModal,
    setRegisterRequiredModal,
    isSignInModalOpen,
    isSignUpModalOpen,
    setSignInModal,
    setSignUpModal,
  } = useStore((state) => state);

  const [loaded] = useFonts({
    main: require("./src/assets/fonts/Lato/Lato-Regular.ttf"),
    "main-bold": require("./src/assets/fonts/Lato/Lato-Bold.ttf"),

    monsterat: require("./src/assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    monseratBold: require("./src/assets/fonts/Montserrat/Montserrat-Bold.ttf"),
    monseratMedium: require("./src/assets/fonts/Montserrat/Montserrat-Medium.ttf"),
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

              <RegisterRequiredModal
                modalVisible={registerRequredModal}
                onClose={() => setRegisterRequiredModal(false)}
                onSignIn={() => {
                  setRegisterRequiredModal(false);
                  setSignInModal(true);
                }}
                onSignUp={() => {
                  setRegisterRequiredModal(false);
                  setSignUpModal(true);
                }}
              />
              <SignInModal
                modalVisible={isSignInModalOpen}
                onClose={() => setSignInModal(false)}
                onSignUp={() => {
                  setSignInModal(false);
                  setSignUpModal(true);
                }}
              />
              <SignUpModal
                modalVisible={isSignUpModalOpen}
                onClose={() => setSignUpModal(false)}
                onSignIn={() => {
                  setSignUpModal(false);
                  setSignInModal(true);
                }}
              />
            </View>
          </Root>
        </NavigationContainer>
      </NativeBaseProvider>
      <Notification />
    </>
  );
}
