import {
  View,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useState } from "react";
import { styles } from "./style-list/list";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  TextInput,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "File de peixe Copacol",
    validity: "02-12-2024",
    quantity: ["150", "kg"],
  },
  {
    id: "bd7acbea-c1b1-46c4-aed5-3ad53abb28ba",
    title: "File de frango",
    validity: "02-11-2024",
    quantity: ["50", "kg"],
  },
];

export default function List() {
  const [modalVisible, setModalVisible] = useState(false);
  const transparent = "rgba(0,0,0,0.3)";

  function renderModal() {
    return (
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: transparent,
          }}
        >
          <View
            style={{
              flex: 0.3,
              alignItems: "flex-start",
              backgroundColor: "#ddeb99",
              width: "85%",
              padding: 10,
              borderRadius: 20,
              // marginTop: "56%",

              borderWidth: 1,
              borderColor: "#3b3b33",

              shadowColor: "rgba(0, 0, 0, 0.2)",
              shadowOffset: {
                width: 8,
                height: 16,
              },
              elevation: 6,
              shadowOpacity: 0.28,
              shadowRadius: 4,
            }}
          >
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <AntDesign name="closecircle" size={24} color={"tomato"} />
            </TouchableOpacity>
            {/* <Text>Modal</Text> */}
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SafeAreaView style={styles.box}>
            <View style={styles.texts}>
              <Text style={styles.title} numberOfLines={1} lineBreakMode="tail">
                {item.title}
              </Text>
              <View style={styles.boxsubtitle}>
                <Text style={styles.subtitle}>{item.validity}</Text>
                <Text style={styles.value}>
                  {item.quantity[0]}
                  {item.quantity[1]}
                </Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={styles.boxvalue}>
                <AntDesign name="edit" size={20} color={"#27271f"} />
              </View>
            </TouchableOpacity>
            {renderModal()}
          </SafeAreaView>
        )}
      />
    </SafeAreaView>
  );
}
