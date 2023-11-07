import { t } from "../translation";
import NavigationHeader from "../components/parts/navigation/navigationHeader";
import Container from "../components/shared/Container";

function Profile() {
  return (
    <Container>
      <NavigationHeader title={t("profile")} />
    </Container>
  );
}

export default Profile;
