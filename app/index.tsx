import "react-native-gesture-handler";

import Home from "@/src/screens/Home/Home";
import Products from "@/src/screens/Products/Products";
import Validity from "@/src/screens/Validity/validity";

import List from "@/src/components/list";
import { View, StyleSheet, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#F8F7F2"} barStyle={"dark-content"} />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    backgroundColor: "#fff",
  },
});
