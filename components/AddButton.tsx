import * as React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { useTheme } from "../hooks/useTheme";
import { Text } from "../components/Text";
import { Icon } from "../components/Icon";

export type AddButtonProps = {
  onPress: () => void;
  title: string;
  style?: any;
};
export function AddButton({ style, onPress, title }: AddButtonProps) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: theme.background }]}
      onPress={onPress}
    >
      <View style={[styles.flex, style]}>
        <Text size="sm">{title}</Text>
        <Icon
          name="plus"
          size="sm"
          color={theme.text}
          style={{ marginLeft: 4 }}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 6,
    paddingStart: 12,
    margin: 4,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
});
