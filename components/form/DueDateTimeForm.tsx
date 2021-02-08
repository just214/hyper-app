import * as React from "react";
import { View } from "react-native";
import { Control } from "react-hook-form";
import { Calendar } from "../Calendar";

export type DueDateTimeFormProps = {
  control?: Control;
};

export function DueDateTimeForm({}: DueDateTimeFormProps) {
  return (
    <View style={{ marginTop: 10 }}>
      <Calendar onDayPress={(value) => console.log(value.dateString)} />
    </View>
  );
}
