import { useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Box } from "native-base";
import { HomeTab, MapTab, PitcherTab, Calendar } from "../Icons";
import RegisterRequiredModal from "../../components/shared/RegisterRequiredModal";
import SignInModal from "../../components/parts/SignInModal";
import SignUpModal from "../../components/parts/SignUpModal";

const BottomIcon = ({ routeKey, color }) => {
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
    return <Calendar color={color} />;
  }
  return null;
};

const TabBar = ({ state, descriptors, navigation }) => {
  const [openModal, setOpenModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

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
            onPress={
              route.name === "TabsProfile"
                ? onPress
                : // () => {
                  //     // setOpenModal(true);
                  //     return onPress;
                  //   }
                  onPress
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
      <RegisterRequiredModal
        modalVisible={openModal}
        onClose={() => setOpenModal(false)}
        onSignIn={() => {
          setOpenModal(false);
          setSignInModal(true);
        }}
        onSignUp={() => {
          setOpenModal(false);
          setSignUpModal(true);
        }}
      />

      <SignInModal
        modalVisible={signInModal}
        onClose={() => setSignInModal(false)}
        onSignUp={() => {
          setSignInModal(false);
          setSignUpModal(true);
        }}
      />

      <SignUpModal
        modalVisible={signUpModal}
        onClose={() => setSignUpModal(false)}
        onSignIn={() => {
          setSignUpModal(false);
          setSignInModal(true);
        }}
      />
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
