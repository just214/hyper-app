import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "../hooks/useTheme";
import type { ThemeProps } from "../types";

const sizeMap = {
  sm: 10,
  md: 12,
  lg: 14,
  xl: 20,
  xxl: 26,
};

export type IconProps = {
  name?: string;
  size?: keyof typeof sizeMap;
  color?: string;
  style?: {};
} & ThemeProps;

export function Icon(props: IconProps) {
  const {
    style = {},
    lightColor,
    darkColor,
    name = "map",
    size = "md",
    color,
    ...otherProps
  } = props;
  const { applyThemeColor } = useTheme();
  const textColor =
    color || applyThemeColor({ light: lightColor, dark: darkColor }, "text");
  return (
    <FontAwesome5
      name={name as any}
      size={sizeMap[size]}
      style={[{ color: textColor }, style]}
      {...otherProps}
    />
  );
}
