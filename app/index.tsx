import "react-native-gesture-handler";

import Home from "@/src/screens/Home/Home";
import Products from "@/src/screens/Products/Products";
import Validity from "@/src/screens/Validity/validity";

import List from "@/src/components/list";
import { View, StyleSheet, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"#27271f"} />
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
    backgroundColor: "#27271f",
  },
});
