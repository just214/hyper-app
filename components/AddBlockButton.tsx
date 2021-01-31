import React from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { View } from "../components/View";
import { Icon } from "../components/Icon";

export const AddBlockButton = (props: any) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("BlockForm");
      }}
      accessibilityRole="button"
      hitSlop={{
        bottom: 0,
        left: 30,
        right: 30,
        top: 50,
      }}
    >
      <View style={styles.button}>
        <Icon name="plus" size="xl" color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2f95dc",
    position: "absolute",
    textAlign: "center",
    bottom: 30,
    right: 30,
    borderRadius: 200,
    height: 50,
    width: 50,
    opacity: 0.9,
  },
});
