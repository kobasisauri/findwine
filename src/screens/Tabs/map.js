import Container from "../../components/shared/Container";
import Title from "../../components/shared/Title";
import { t } from "../../translation";

function OrdersScreen({ navigation }) {
  return (
    <Container>
      <Title title={t("georgianWineries")} />
    </Container>
  );
}

export default OrdersScreen;
