import { Image } from "native-base";
import loadingImg from "../../assets/img/loading.gif";
import Container from "./Container";

function Loader() {
  return (
    <Container
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image source={loadingImg} alt="loading" />
    </Container>
  );
}

export default Loader;
