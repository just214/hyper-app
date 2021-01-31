import * as React from "react";
import { Picker as DefaultPicker } from "@react-native-picker/picker";

import type { ThemeProps } from "../types";
import { useTheme } from "../hooks/useTheme";

export type PickerProps = ThemeProps & DefaultPicker["props"];

export function Picker(props: PickerProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const { applyThemeColor } = useTheme();
  const color = applyThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultPicker itemStyle={[{ color }, style]} {...otherProps} />;
}

Picker.Item = DefaultPicker.Item;
