import React, { useState, useEffect, useRef } from "react";
import { Box, Button } from "native-base";
import { StyleSheet, Animated, View, Image } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#2F3238",
    color: "#fff",
    alignItems: "center",
    paddingTop: 180,
  },
  progressbar: {
    alignItems: "flex-start",
    width: 300,
    height: 15,
    borderRadius: 7.5,
    overflow: "hidden",
  },
  progressbarfill: {
    height: 13,
    borderRadius: 6.5, // Initial border radius
    backgroundColor: "#B44D2D",
  },
  progressText: {
    color: "#fff",
    backgroundColor: "transparent",
    marginBottom: 16,
    fontSize: 16,
    fontFamily: "monsterat",
    fontWeight: 600,
  },
});

function Loading() {
  const progress = useRef(new Animated.Value(0)).current;
  const [percentage, setPercentage] = useState(0);

  const startAnimation = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  };

  const handleButtonClick = () => {
    progress.setValue(0);
    setPercentage(0);
    startAnimation();
  };

  useEffect(() => {
    let isMounted = true;

    const interval = setInterval(() => {
      if (isMounted) {
        const newPercentage = Math.min(percentage + 1, 100);
        progress.setValue(newPercentage / 100);
        setPercentage(newPercentage);
      }
    }, 50);

    return () => {
      clearInterval(interval);
      isMounted = false;
    };
  }, [percentage]);

  return (
    <Box style={styles.wrapper}>
      <Image
        source={require("../../assets/img/logo.png")}
        style={{ width: 190, height: 95, marginBottom: 60 }}
      />
      <Text style={styles.progressText}>{`${Math.round(percentage)} %`}</Text>

      <View style={styles.progressbar}>
        <Animated.View
          style={[
            styles.progressbarfill,
            {
              width: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"],
              }),
              borderRadius: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ["6.5px", "13px"],
              }),
            },
          ]}
        ></Animated.View>
      </View>
      <Button onPress={handleButtonClick}>Start Animation</Button>
    </Box>
  );
}

export default Loading;
