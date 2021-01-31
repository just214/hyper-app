import * as React from "react";
import { Text } from "../Text";
import { Picker } from "../Picker";
import { View } from "react-native";
import { Control, Controller } from "react-hook-form";

export type TimerFormProps = {
  control: Control;
  defaultMinutes: number;
  defaultHours: number;
};

export function TimerForm({
  control,
  defaultMinutes,
  defaultHours,
}: TimerFormProps) {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Controller
        control={control}
        name="timer_hours"
        // rules={rules}
        defaultValue={defaultHours || 0}
        render={({ onChange, onBlur, value }) => (
          <Picker
            style={{ width: 60 }}
            selectedValue={value}
            onValueChange={(v) => onChange(v)}
          >
            {Array.from({ length: 24 }, (v, i) => (
              <Picker.Item key={i} label={i.toString()} value={i} />
            ))}
          </Picker>
        )}
      />

      <Text>Hours</Text>
      <Controller
        control={control}
        name="timer_minutes"
        // rules={rules}
        defaultValue={defaultMinutes || 0}
        render={({ onChange, onBlur, value }) => (
          <Picker
            style={{ width: 60 }}
            selectedValue={value}
            onValueChange={(v) => onChange(v)}
          >
            {Array.from({ length: 60 }, (v, i) => (
              <Picker.Item key={i} label={i.toString()} value={i} />
            ))}
          </Picker>
        )}
      />

      <Text>Minutes</Text>
    </View>
  );
}
