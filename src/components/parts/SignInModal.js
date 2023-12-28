import { useState, useEffect } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Modal } from "native-base";
import { Close } from "../Icons";
import Text from "../shared/Text";
import { t } from "../../translation";
import Button from "../shared/Button";
import Input from "../shared/Input";
import CheckboxField from "../shared/CheckBox";
import { signIn, resetPassword } from "../../services/signUp";
import { useNavigation } from "@react-navigation/native";
import {
  checkedSignedInAction,
  signInActionSG,
} from "../../store/ducks/authDucks";

function SignInModal({ modalVisible, onClose, onSignUp }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [remember, setRememmber] = useState(false);
  const [reset, setReset] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  handleSubmit = () => {
    if (reset) {
      resetPassword({ email: values.email }).then((res) => {
        console.log(res);
      });
    } else {
      dispatch(
        signInActionSG(
          { email: values.email, password: values.password },
          () => {
            console.log("res", res);
            setTimeout(() => {
              dispatch(checkedSignedInAction(true));
              onClose();
            }, 1000);
          }
        )
      );
    }
  };

  return (
    <Modal
      isOpen={modalVisible}
      onClose={() => {
        onClose();
        setReset(false);
      }}
      size="xl"
    >
      <Modal.Content style={{ borderRadius: 4 }}>
        <Modal.Body>
          <View style={styles.close}>
            <Close
              onPress={() => {
                onClose();
                setReset(false);
              }}
            />
          </View>

          <Text textCenter style={styles.title}>
            {!reset ? t("signIn") : t("resetPassword")}
          </Text>

          <Input
            placeholder={t("email")}
            value={values.email}
            onChangeText={(val) =>
              setValues((state) => ({ ...state, email: val }))
            }
          />
          {!reset ? (
            <Input
              placeholder={t("password")}
              secureTextEntry
              value={values.password}
              onChangeText={(val) =>
                setValues((state) => ({ ...state, password: val }))
              }
            />
          ) : (
            <></>
          )}
          {!reset ? (
            <>
              <View style={{ marginTop: 16 }}>
                <CheckboxField
                  checked={remember}
                  onPress={() => setRememmber((state) => !state)}
                  label={t("rememberMe")}
                />
              </View>

              <Pressable style={styles.reset} onPress={() => setReset(true)}>
                <Text color="#20302D">{t("lostYourPass?")}</Text>
              </Pressable>
            </>
          ) : (
            <></>
          )}

          <Button
            buttonTextStyle={{ textTransform: "uppercase" }}
            onPress={() => handleSubmit()}
          >
            {!reset ? t("signIn") : t("resetPassword")}
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
