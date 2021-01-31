import * as React from "react";
import { View as DefaultView } from "react-native";
import { useTheme as useThemeHook } from "../hooks/useTheme";
import type { ThemeProps } from "../types";

export type ViewProps = ThemeProps &
  DefaultView["props"] & { useTheme?: boolean };

export function View(props: ViewProps) {
  const {
    style,
    lightColor,
    darkColor,
    useTheme = false,
    ...otherProps
  } = props;

  const { applyThemeColor } = useThemeHook();

  const backgroundColor = useTheme
    ? applyThemeColor({ light: lightColor, dark: darkColor }, "background")
    : "none";

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
