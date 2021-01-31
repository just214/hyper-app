import * as React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { useTheme } from "../hooks/useTheme";
import type { ThemeProps } from "../types";
import { Text } from "../components/Text";
import { Icon } from "../components/Icon";

export type AddButtonProps = ThemeProps & {
  onPress: () => void;
  title: string;
  style?: any;
};
export function AddButton({
  lightColor,
  darkColor,
  style,
  onPress,
  title,
}: AddButtonProps) {
  const { applyThemeColor } = useTheme();

  const backgroundColor = applyThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  const color = applyThemeColor({}, "text");

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
    >
      <View style={[styles.flex, style]}>
        <Text size="sm">{title}</Text>
        <Icon name="plus" size="sm" color={color} style={{ marginLeft: 4 }} />
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
