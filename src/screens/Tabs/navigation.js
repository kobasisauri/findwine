import { Pressable, Text } from "react-native";
import Container from "../../components/shared/Container";

function ProfileScreen({ navigation }) {
  return (
    <Container>
      <Text>profile</Text>

      <Pressable onPress={() => navigation.navigate("wineries")}>
        <Text>Wineries</Text>
      </Pressable>
    </Container>
  );
}

export default ProfileScreen;
