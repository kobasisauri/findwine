import { View, StyleSheet } from "react-native";
import { Modal } from "native-base";
import Text from "./Text";
import Button from "./Button";
import { Close } from "../Icons";
import { t } from "../../translation";

function RegisterRequiredModal({ modalVisible, onClose, onSignIn, onSignUp }) {
  return (
    <Modal isOpen={modalVisible} onClose={onClose} size="xl">
      <Modal.Content style={{ borderRadius: 4 }}>
        <Modal.Body>
          <View style={styles.close}>
            <Close onPress={onClose} />
          </View>

          <Text textCenter style={styles.title}>
            {t("notRegistered?")}
          </Text>

          <Text textCenter style={styles.desc}>
            {t("registrationRequired")}
          </Text>

          <Button
            buttonTextStyle={{ textTransform: "uppercase" }}
            onPress={onSignIn}
          >
            {t("signIn")}
          </Button>

          <View style={styles.divider}>
            <View style={styles.line} />

            <Text color="#101828B2">{t("or")}</Text>

            <View style={styles.line} />
          </View>

          <Button
            buttonTextStyle={{ textTransform: "uppercase", color: "#2F3238" }}
            style={{
              backgroundColor: "#F2F2F2",
              borderColor: "#F2F2F2",
              marginBottom: 25,
            }}
            onPress={onSignUp}
          >
            {t("register")}
          </Button>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}

export default RegisterRequiredModal;

const styles = StyleSheet.create({
  close: {
    alignItems: "flex-end",
    marginBottom: 36,
  },
  title: {
    fontSize: 24,
    fontFamily: "monseratBold",
    marginBottom: 13,
    color: "#24262D",
  },
  desc: {
    maxWidth: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: 22,
    marginBottom: 39,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 25,
  },
  line: {
    height: 1,
    width: 70,
    backgroundColor: "#292C314D",
  },
});
