import * as React from "react";
import { View as DefaultView, StyleSheet } from "react-native";

import type { ThemeProps } from "../types";
import { useTheme } from "../hooks/useTheme";

export type CardProps = ThemeProps & DefaultView["props"];

export function Card(props: CardProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const { applyThemeColor } = useTheme();
  const backgroundColor = applyThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <DefaultView
      style={[{ backgroundColor }, style, styles.card]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 10,
  },
});
