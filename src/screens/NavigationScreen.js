import React from "react";
import { Box, Pressable, ScrollView } from "native-base";
import { StyleSheet } from "react-native";
import Navigationitem from "../components/parts/navigation/navigationItem";
import menuItems from "../constants/menu";
import NavigationHeder from "../components/parts/navigation/navigationHeader";
import Container from "../components/shared/Container";
import TextComp from "../components/shared/Text";
import colors from "../constants/colors";
import useStore from "../stores/store";

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  userContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 29,
    paddingHorizontal: 16,
  },
  user: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: "50%",
    backgroundColor: colors.danger,
    marginRight: 10,
  },
});

function NavigatorScreen({ navigation }) {
  const { userData } = useStore((state) => state);

  return (
    <Container>
      <Box style={styles.flex}>
        <NavigationHeder navigation={navigation} />

        <Box style={styles.userContainer}>
          <Pressable onPress={() => navigation.navigate("TabsProfile")}>
            <TextComp color="#000" mainFont>
              {userData.first_name} {userData.last_name}
            </TextComp>
            <TextComp color="#000">{userData.email}</TextComp>
          </Pressable>
        </Box>

        <ScrollView style={{ paddingHorizontal: 16 }}>
          {menuItems.map((item, i) => (
            <Navigationitem
              key={`menu-${i}`}
              item={item}
              handleClick={(n) => navigation.navigate(n)}
            />
          ))}
        </ScrollView>
      </Box>
    </Container>
  );
}

export default NavigatorScreen;
