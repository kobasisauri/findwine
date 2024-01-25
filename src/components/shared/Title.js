import { Text, View, StyleSheet } from "react-native";
import { Box } from "native-base";

function Title({ title }) {
  return (
    <View style={styles.contaner}>
      <Text style={styles.text}>{title}</Text>

      <Box style={styles.bottomLine}>
        <Box style={styles.buttomLineMidle} />
      </Box>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  contaner: {
    paddingTop: 50,
    alignItems: "center",
    width: "90%",
    marginBottom: 24,
    marginLeft: "auto",
    marginRight: "auto",
  },
  text: {
    fontSize: 24,
    fontWeight: 700,
    paddingHorizontal: 30,
    textAlign: "center",
    // fontFamily: "monseratBold",
    marginBottom: 16,
    textTransform: "uppercase",
  },
  bottomLine: {
    width: "90%",
    height: 1,
    borderWidth: 1,
    borderColor: "#B2B2B2",
    alignItems: "center",
    justifyContent: "center",
  },
  buttomLineMidle: {
    width: "60%",
    height: 1.5,
    borderWidth: 1,
    borderColor: "#DE6D4A",
  },
});
