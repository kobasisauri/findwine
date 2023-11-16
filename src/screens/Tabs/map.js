import NavigationHeader from "../../components/parts/navigation/navigationHeader";
import Container from "../../components/shared/Container";
import Title from "../../components/shared/Title";
import { t } from "../../translation";

function OrdersScreen({ navigation }) {
  return (
    <Container>
      <NavigationHeader title={t("map")} tab />
      <Title title={t("georgianWineries")} />
    </Container>
  );
}

export default OrdersScreen;
