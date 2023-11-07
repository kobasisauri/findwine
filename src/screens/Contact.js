import { t } from "../translation";
import NavigationHeader from "../components/parts/navigation/navigationHeader";
import Container from "../components/shared/Container";

function Contact() {
  return (
    <Container>
      <NavigationHeader title={t("contact")} />
    </Container>
  );
}

export default Contact;
