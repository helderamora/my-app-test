import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function Products() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"#27271f"} />
      <Text>Products</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#27271f",
  },
});
