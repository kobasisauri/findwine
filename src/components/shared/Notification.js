import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import useStore from "../../stores/store";
import Text from "./Text";
import { SuccessIcon, ErrorIcon, WarningIcon } from "../Icons";

function Notification() {
  const { notification, hideNotification } = useStore((state) => state);

  useEffect(() => {
    if (notification) {
      const timeoutId = setTimeout(() => {
        hideNotification();
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [notification]);

  return (
    <View
      style={[
        styles.container,
        {
          display: notification.isVisible ? "flex" : "none",
        },
      ]}
    >
      {!!notification.isVisible && (
        <>
          {notification?.type === "success" ? (
            <SuccessIcon />
          ) : notification?.type === "warning" ? (
            <WarningIcon />
          ) : (
            <ErrorIcon />
          )}

          <Text marginLeft={10}>{notification?.message}</Text>
        </>
      )}
    </View>
  );
}

export default Notification;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    width: Dimensions.get("window").width - 20,
    padding: 10,
    backgroundColor: "#fff",
    zIndex: 9999,
    top: 120,
    marginHorizontal: 10,
    borderRadius: 8,
    shadowColor: "#E1E1E1",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 8,
    flex: 1,
    elevation: 8,
  },
});
