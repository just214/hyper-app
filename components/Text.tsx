import * as React from "react";
import { Text as DefaultText } from "react-native";

import type { ThemeProps } from "../types";
import { useTheme } from "../hooks/useTheme";

const sizeMap = {
  sm: 14,
  md: 16,
  lg: 18,
};

export type TextProps = ThemeProps &
  DefaultText["props"] & {
    size?: "sm" | "md" | "lg";
  };

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, size = "md", ...otherProps } = props;
  const { applyThemeColor } = useTheme();
  const color = applyThemeColor({ light: lightColor, dark: darkColor }, "text");

  const fontSize = sizeMap[size];

  return <DefaultText style={[{ color, fontSize }, style]} {...otherProps} />;
}
