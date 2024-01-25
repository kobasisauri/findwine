import { Text, View, StyleSheet } from "react-native";

function DescriptionCards({ title, text, icon }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>{icon}</View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export default DescriptionCards;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignItems: "center",
    textAlign: "center",
    maxWidth: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    width: 70,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    // fontFamily: "monseratBold",
    color: "#2F3238",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    // fontFamily: "main",
    textAlign: "center",
    color: "#393B40",
  },
});
