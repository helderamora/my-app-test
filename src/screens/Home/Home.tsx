import React from "react";
import List from "@/src/components/list";
import {
  Button,
  View,
  StyleSheet,
  Alert,
  Modal,
  StatusBar,
} from "react-native";
import Products from "../Products/Products";
import Validity from "../Validity/validity";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"#27271f"} />

      <List />
      {/* <Products />
      <Validity /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#27271f",
  },
});
