import * as React from "react";
import { TextInput as DefaultTextInput } from "react-native";

import type { ThemeProps } from "../types";
import { useTheme } from "../hooks/useTheme";

const sizeMap = {
  sm: 10,
  md: 16,
  lg: 20,
};

export type TextInputProps = ThemeProps &
  DefaultTextInput["props"] & {
    size?: "sm" | "md" | "lg";
  };

export function TextInput(props: TextInputProps) {
  const { style, lightColor, darkColor, size = "md", ...otherProps } = props;
  const { applyThemeColor } = useTheme();
  const color = applyThemeColor({ light: lightColor, dark: darkColor }, "text");

  const fontSize = sizeMap[size];
  return (
    <DefaultTextInput
      style={[
        { color, fontSize, paddingBottom: 10, paddingHorizontal: 8 },
        style,
      ]}
      {...otherProps}
    />
  );
}
