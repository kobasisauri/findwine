import { t } from "../translation";
import NavigationHeader from "../components/parts/navigation/navigationHeader";
import Container from "../components/shared/Container";

function EventDetails({ route }) {
  return (
    <Container style={{ backgroundColor: "#F2F2F2" }}>
      <NavigationHeader title={t("upcomingEvent")} />
    </Container>
  );
}

export default EventDetails;
