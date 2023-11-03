import { Box } from "native-base";
import { SafeAreaView, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#2F3238",
    color: "#fff",
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  container: {
    flex: 1,
    // backgroundColor: "#F2F2F2",
    backgroundColor: "#fff",
  },
});

function Container({ children, style }) {
  const containerStyles = [styles.container];

  if (style) {
    containerStyles.push(style);
  }

  return (
    <Box style={styles.wrapper}>
      <SafeAreaView style={styles.safeArea}>
        <Box style={containerStyles}>{children}</Box>
      </SafeAreaView>
    </Box>
  );
}

export default Container;
