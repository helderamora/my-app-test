import "react-native-gesture-handler";

import Home from "@/src/screens/Home/Home";
import Products from "@/src/screens/Products/Products";
import Validity from "@/src/screens/Validity/validity";

import List from "@/src/components/list";
import { View, StyleSheet, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={"#F8F7F2"} />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 70,
  },
});
