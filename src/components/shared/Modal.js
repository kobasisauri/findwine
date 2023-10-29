import React from "react";
import { StyleSheet, Modal } from "react-native";
import { Box } from "native-base";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000080",
  },
  modalView: {
    width: "95%",
    maxWidth: 343,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 24,
  },
});

function ModalComp({ modalVisible, setModalVisible, children, style }) {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => setModalVisible()}
    >
      <Box style={styles.centeredView}>
        <Box style={[styles.modalView, style && style]}>{children}</Box>
      </Box>
    </Modal>
  );
}

export default ModalComp;
