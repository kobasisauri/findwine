import NavigationHeader from "../../components/parts/navigation/navigationHeader";
import Container from "../../components/shared/Container";
import { Text } from "react-native";
import { t } from "../../translation";

function SearchScreen({ navigation }) {
  return (
    <Container>
      <NavigationHeader title={t("profile")} tab />
      <Text>wine</Text>
    </Container>
  );
}

export default SearchScreen;
