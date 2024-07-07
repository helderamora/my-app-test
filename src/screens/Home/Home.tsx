import React from "react";
import List from "@/src/components/list";
import { Button, View, StyleSheet, Alert, Modal } from "react-native";
import { styles } from "@/src/components/style-list/list";
import AddProducts from "@/src/components/modal";

export default function Home() {
  return (
    <View style={styles.container}>
      <List />
      {/* <AddProducts /> */}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
});
