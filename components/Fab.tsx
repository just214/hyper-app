import React from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View } from "./View";
import { Icon } from "./Icon";
import { useTheme } from "../hooks/useTheme";

export const Fab = () => {
  const { theme } = useTheme();
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
      <View style={[styles.button, { backgroundColor: theme.primary }]}>
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
