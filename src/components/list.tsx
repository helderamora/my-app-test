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
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: transparent,
          }}
        >
          <View
            style={{
              flexDirection: "row-reverse",
              gap: 120,
              alignItems: "flex-start",
              backgroundColor: "#f5f5f5",
              width: "100%",
              height: "76%",
              borderRadius: 20,
              marginTop: "56%",

              borderWidth: 1,
              borderColor: "rgba(0, 0, 0, 0.3)",

              shadowColor: "rgba(0, 0, 0, 0.7)",
              shadowOffset: {
                width: 8,
                height: 16,
              },
              elevation: 12,
              shadowOpacity: 0.28,
              shadowRadius: 4,
            }}
          >
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text
                style={{
                  color: "#000",
                  width: "100%",
                  marginRight: 8,
                  marginTop: 8,
                }}
              >
                <AntDesign name="closecircle" size={24} color={"#0A0AAA"} />
              </Text>
            </TouchableOpacity>
            <Text>Modal</Text>
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
                <AntDesign name="edit" size={20} color={"#fff9"} />
              </View>
            </TouchableOpacity>
            {renderModal()}
          </SafeAreaView>
        )}
      />
    </SafeAreaView>
  );
}
