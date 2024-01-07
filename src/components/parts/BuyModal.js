import { useState, useEffect } from "react";
import { View, StyleSheet, Pressable, Image, Linking } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Modal } from "native-base";
import { Close } from "../Icons";
import Text from "../shared/Text";
import { t } from "../../translation";
import Button from "../shared/Button";
import Input from "../shared/Input";
import CheckboxField from "../shared/CheckBox";
import { useNavigation } from "@react-navigation/native";
import { Visa, Mastercard, Paypal, Amex } from "../Icons";
import { buy } from "../../services/payment";

function BuyModal({ modalVisible, onClose, data }) {
  const navigation = useNavigation();

  const [quantity, setQuantity] = useState(1);
  const [payment, setPayment] = useState();

  const [acceptTearms, setAcceptTearms] = useState();

  const handleClose = () => {
    onClose();
    setQuantity(1);
    setAcceptTearms(null);
    setPayment(null);
  };

  const submit = () => {
    if (acceptTearms && payment) {
      console.log("submit");
      buy({
        qty: quantity,
        passport_id: data.id,
        card: payment === 1 ? "visa/mastercard" : "amex",
      }).then((res) => {
        if (res && res.message === "success") {
          Linking.openURL(res.paymentUrl);
          handleClose();
        }
      });
    } else {
      console.log("err");
    }
  };

  return (
    <Modal isOpen={modalVisible} onClose={handleClose} size="xl">
      <Modal.Content style={{ borderRadius: 4 }}>
        <Modal.Body>
          <View style={styles.close}>
            <Close onPress={handleClose} />
          </View>

          <View style={{ flexDirection: "row", gap: 16 }}>
            <Image
              source={require("../../assets/img/winePassport.png")}
              style={{ height: 101, width: 74 }}
            />
            <View style={{ justifyContent: "space-around" }}>
              <Text fontSize={16} style={{ fontFamily: "monseratBold" }}>
                {data?.name}
              </Text>
              <Text>01/01/2024 - 01/01/2025</Text>
              <Pressable
                onPress={() => {
                  navigation.navigate("package-details", { id: data.id });
                  handleClose();
                }}
              >
                <Text style={{ textDecorationLine: "underline" }}>
                  {t("moreDetails")}
                </Text>
              </Pressable>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 50,
              marginBottom: 39,
            }}
          >
            <Text fontSize={18} style={{ fontFamily: "monseratBold" }}>
              {t("quantity")}
            </Text>

            <View style={styles.quantity}>
              <Pressable
                onPress={() =>
                  setQuantity((prev) => {
                    return prev === 1 ? 1 : prev - 1;
                  })
                }
                style={{
                  paddingHorizontal: 18,
                  paddingVertical: 20,
                }}
              >
                <Text fontSize={18}>-</Text>
              </Pressable>
              <Text fontSize={18} style={{ paddingVertical: 20 }}>
                {quantity}
              </Text>

              <Pressable
                onPress={() => setQuantity((prev) => prev + 1)}
                style={{
                  paddingHorizontal: 18,
                  paddingVertical: 20,
                }}
              >
                <Text fontSize={18}>+</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.line} />

          <View
            style={{
              marginBottom: 39,
              gap: 30,
            }}
          >
            <Text fontSize={18} style={{ fontFamily: "monseratBold" }}>
              {t("price")}
            </Text>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text fontSize={16}>
                {t("priorityWinePassport")} x{" "}
                <Text fontSize={16} color="#B44D2D">
                  {quantity}
                </Text>
              </Text>
              <Text fontSize={16}>{data?.price} GEL</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text fontSize={18} style={{ fontFamily: "monseratBold" }}>
                {t("totalSummery")}
              </Text>
              <Text style={{ fontFamily: "monseratBold" }} fontSize={18}>
                {data?.price * quantity} GEL
              </Text>
            </View>
          </View>

          <View style={styles.line} />

          <View style={{ marginBottom: 40 }}>
            <Text
              fontSize={20}
              style={{ fontFamily: "monseratBold", marginBottom: 30 }}
            >
              {t("paymentMethod")}
            </Text>
            <View style={styles.payment}>
              <CheckboxField
                checked={payment === 1}
                onPress={() => setPayment(1)}
                label={"Visa/Mastercard"}
              />
              <View style={{ flexDirection: "row", gap: 8 }}>
                <Visa />
                <Mastercard />
              </View>
            </View>

            <View style={styles.payment}>
              <CheckboxField
                checked={payment === 2}
                onPress={() => setPayment(2)}
                label={"AMEX"}
              />
              <Amex />
            </View>

            <View style={styles.payment}>
              <CheckboxField
                // checked={payment}
                // onPress={() => setPayment((state) => !state)}
                label={"Paypal"}
              />
              <Paypal />
            </View>

            <View style={{ marginTop: 12 }}>
              <CheckboxField
                checked={acceptTearms}
                onPress={() => setAcceptTearms((state) => !state)}
                label={t("termsAndConditions")}
              />
            </View>
          </View>

          <Button
            buttonTextStyle={{ textTransform: "uppercase" }}
            onPress={() => submit()}
          >
            {t("pay")}
          </Button>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}

export default BuyModal;

const styles = StyleSheet.create({
  payment: {
    flexDirection: "row",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  close: {
    alignItems: "flex-end",
    marginBottom: 19,
  },
  quantity: {
    flexDirection: "row",
    gap: 18,
    borderColor: "rgba(41, 44, 49, 0.24)",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 18,
  },
  line: {
    borderColor: "#C0C0C0",
    borderBottomWidth: 1,
    marginBottom: 35,
  },
  // title: {
  //   fontSize: 24,
  //   fontFamily: "monseratBold",
  //   marginBottom: 22,
  //   color: "#24262D",
  // },
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
