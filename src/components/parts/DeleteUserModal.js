import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Modal } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useStore from "../../stores/store";
import { Close } from "../Icons";
import Text from "../shared/Text";
import { t } from "../../translation";
import Button from "../shared/Button";
import { deleteUser } from "../../services/signUp";

function DeleteUserModal({ modalVisible, onClose }) {
  const navigation = useNavigation();
  const { logOut, showNotification } = useStore((state) => state);

  const handleDelete = () => {
    deleteUser().then((res) => {
      if (res.success) {
        logOut();
        AsyncStorage.multiRemove(["token", "role", "userData"]);
        showNotification("success", "User deleted sucessfully");
        navigation.navigate("home");
      }
    });
  };
  return (
    <Modal isOpen={modalVisible} onClose={onClose} size="xl">
      <Modal.Content style={{ borderRadius: 4 }}>
        <Modal.Body>
          <View style={styles.close}>
            <Close onPress={onClose} />
          </View>

          <Text
            textCenter
            color="#3A3D43"
            uppercase
            fontSize="lg"
            fontWeight="bold"
            marginBottom={12}
          >
            {t("areYouSure?")}
          </Text>

          <Text textCenter color="#222E2E" style={styles.text}>
            {t("deleteUserInfo")}
          </Text>

          <View style={styles.buttons}>
            <Button
              style={{ flex: 1 }}
              buttonTextStyle={{ textTransform: "uppercase" }}
              onPress={handleDelete}
            >
              {t("delete")}
            </Button>
            <Button
              style={{
                flex: 1,
                backgroundColor: "#F2F2F2",
                borderColor: "#F2F2F2",
              }}
              buttonTextStyle={{ textTransform: "uppercase", color: "#272A31" }}
              onPress={onClose}
            >
              {t("cancel")}
            </Button>
          </View>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}

export default DeleteUserModal;

const styles = StyleSheet.create({
  close: {
    alignItems: "flex-end",
  },
  text: {
    lineHeight: 25,
    marginBottom: 20,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
});
