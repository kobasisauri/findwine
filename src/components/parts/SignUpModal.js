import { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Modal } from "native-base";
import { Close } from "../Icons";
import Text from "../shared/Text";
import { t } from "../../translation";
import Button from "../shared/Button";
import Input from "../shared/Input";

function SignUpModal({ modalVisible, onClose, onSignIn }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <Modal isOpen={modalVisible} onClose={onClose} size="xl">
      <Modal.Content style={{ borderRadius: 4 }}>
        <Modal.Body>
          <View style={styles.close}>
            <Close onPress={onClose} />
          </View>

          <Text textCenter style={styles.title}>
            {t("signUp")}
          </Text>

          <Input
            placeholder={t("fullName")}
            value={values.name}
            onChangeText={(val) =>
              setValues((state) => ({ ...state, name: val }))
            }
          />

          <Input
            placeholder={t("email")}
            value={values.email}
            onChangeText={(val) =>
              setValues((state) => ({ ...state, email: val }))
            }
          />

          <Input
            placeholder={t("password")}
            secureTextEntry
            value={values.password}
            onChangeText={(val) =>
              setValues((state) => ({ ...state, password: val }))
            }
          />

          <Input
            placeholder={t("confirmPassword")}
            secureTextEntry
            value={values.confirmPassword}
            onChangeText={(val) =>
              setValues((state) => ({ ...state, confirmPassword: val }))
            }
          />

          <Button
            buttonTextStyle={{ textTransform: "uppercase" }}
            onPress={() => console.log("submit")}
          >
            {t("register")}
          </Button>

          <View style={styles.divider}>
            <View style={styles.line} />

            <Text color="#101828B2">{t("orSignUpWith")}</Text>

            <View style={styles.line} />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 40,
            }}
          >
            <Text>{t("haveAccount")}</Text>
            <Text> </Text>
            <Pressable onPress={onSignIn}>
              <Text style={{ fontFamily: "monseratBold", fontSize: 16 }}>
                {t("signIn")}
              </Text>
            </Pressable>
          </View>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}

export default SignUpModal;

const styles = StyleSheet.create({
  close: {
    alignItems: "flex-end",
  },
  title: {
    fontSize: 24,
    fontFamily: "monseratBold",
    marginBottom: 22,
    color: "#24262D",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
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
