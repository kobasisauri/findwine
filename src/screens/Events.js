import { t } from "../translation";
import NavigationHeader from "../components/parts/navigation/navigationHeader";
import Container from "../components/shared/Container";

function Events() {
  return (
    <Container>
      <NavigationHeader title={t("events")} />
    </Container>
  );
}

export default Events;
