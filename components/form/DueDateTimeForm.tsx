import * as React from "react";
import { View } from "react-native";
import { Controller, ControllerProps, Control } from "react-hook-form";
import { Calendar } from "../Calendar";

export type DueDateTimeFormProps = {
  control?: Control;
};

export function DueDateTimeForm(props: DueDateTimeFormProps) {
  const { control } = props;
  return (
    <View style={{ marginTop: 10 }}>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Calendar
            selectedDay={value}
            onDayPress={(v) => onChange(v.dateString)}
          />
        )}
        name="due_date"
        // rules={rules}
        // defaultValue={defaultValue}
      />
    </View>
  );
}

{
  /* <TextInput
onBlur={onBlur}
onChangeText={(value) => onChange(value)}
value={value}
placeholderTextColor="#838383"
{...rest}
/> */
}
