import React from "react";
import List from "@/src/components/list";
import { Button, View, StyleSheet, Alert, Modal } from "react-native";
import { styles } from "@/src/components/style-list/list";
import AddProducts from "@/src/components/modal";

export default function Home() {
  return (
    <View>
      <List />
      {/* <AddProducts /> */}
    </View>
  );
}
