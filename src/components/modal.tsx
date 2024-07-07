import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Text,
  SafeAreaView,
  Pressable,
} from "react-native";
import { flingGestureHandlerProps } from "react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler";

export default function AddProducts() {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{}}
      >
        <View style={styles.container}>
          <Text style={{}}>Test modal</Text>
          <Pressable
            style={styles.buttonclosed}
            onPress={() => setModalVisible(false)}
          />
        </View>
      </Modal>
      <View style={styles.buttonopen}>
        <Pressable
          style={styles.buttonopen}
          onPress={() => setModalVisible(true)}
        />
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    marginVertical: 150,
    marginHorizontal: 12,
    borderRadius: 16,
  },
  buttonclosed: {
    flex: 0.1,
    width: 45,
    borderRadius: 6,
    backgroundColor: "red",
  },
  buttonopen: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    margin: 0,
    borderRadius: 6,
    backgroundColor: "green",
  },
});
