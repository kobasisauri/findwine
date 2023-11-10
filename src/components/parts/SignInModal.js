import { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Modal } from "native-base";
import { Close } from "../Icons";
import Text from "../shared/Text";
import { t } from "../../translation";
import Button from "../shared/Button";
import Input from "../shared/Input";
import CheckboxField from "../shared/CheckBox";

function SignInModal({ modalVisible, onClose, onSignUp }) {
  const [remember, setRememmber] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  return (
    <Modal isOpen={modalVisible} onClose={onClose} size="xl">
      <Modal.Content style={{ borderRadius: 4 }}>
        <Modal.Body>
          <View style={styles.close}>
            <Close onPress={onClose} />
          </View>

          <Text textCenter style={styles.title}>
            {t("signIn")}
          </Text>

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

          <View style={{ marginTop: 16 }}>
            <CheckboxField
              checked={remember}
              onPress={() => setRememmber((state) => !state)}
              label={t("rememberMe")}
            />
          </View>

          <Pressable style={styles.reset}>
            <Text color="#20302D">{t("lostYourPass?")}</Text>
          </Pressable>

          <Button
            buttonTextStyle={{ textTransform: "uppercase" }}
            onPress={() => console.log("submit")}
          >
            {t("signIn")}
          </Button>

          <Pressable style={styles.register} onPress={onSignUp}>
            <Text fontSize={18} color="#24262D">
              {t("registerNow")}
            </Text>
          </Pressable>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}

export default SignInModal;

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
  reset: {
    paddingVertical: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  register: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 15,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
