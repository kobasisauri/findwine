import { useEffect, useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { FilledStar } from "../Icons";

function Ranking({ rate, setRate, disabled }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    let x = [];

    for (let i = 0; i < 5; i++) {
      x.push(
        <Pressable
          key={i + 1}
          onPress={() => (disabled ? null : setRate(i + 1))}
        >
          <FilledStar filled={!!(!!rate && rate >= i + 1)} />
        </Pressable>
      );
    }

    setStars(x);
  }, [rate]);

  return <View style={styles.container}>{stars}</View>;
}

export default Ranking;

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center", gag: 10 },
});
