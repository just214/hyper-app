import * as React from "react";
import { Text } from "../Text";
import { View } from "react-native";
import { Control, Controller } from "react-hook-form";
import { Calendar } from "react-native-calendars";
import layout from "../../constants/Layout";

export type DueDateTimeFormProps = {
  control?: Control;
};

export function DueDateTimeForm({}: DueDateTimeFormProps) {
  return (
    <View style={{ marginTop: 30 }}>
      <Calendar style={{ width: layout.window.width - 50 }} />
    </View>
  );
}
