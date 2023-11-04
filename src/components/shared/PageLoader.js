import { Image } from "native-base";
import loadingImg from "../../assets/img/loading.gif";
import Container from "./Container";

function PageLoader() {
  return (
    <Container
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2F3238",
      }}
    >
      <Image source={loadingImg} alt="loading" />
    </Container>
  );
}

export default PageLoader;
