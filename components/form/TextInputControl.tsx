import * as React from "react";
import { TextInput, TextInputProps } from "../TextInput";
import { Controller, ControllerProps } from "react-hook-form";

export type TextInputControlProps = TextInputProps &
  Omit<ControllerProps<any>, "render">;

export const TextInputControl = (props: TextInputControlProps) => {
  const { control, name, rules, defaultValue = "", ...rest } = props;
  return (
    <Controller
      control={control}
      render={({ onChange, onBlur, value }) => (
        <TextInput
          onBlur={onBlur}
          onChangeText={(value) => onChange(value)}
          value={value}
          placeholderTextColor="#838383"
          {...rest}
        />
      )}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
    />
  );
};
