import * as React from "react";
import { View } from "../components/View";
import { StyleSheet } from "react-native";
import { CheckItem } from "../components/CheckItem";

export type VerticalSelectProps = {
  values: string[];
  selectedIndex: number;
  onChange: (value: any, index: number) => void;
};

export function VerticalSelect(props: VerticalSelectProps) {
  const { values, selectedIndex, onChange } = props;

  return (
    <View style={styles.container}>
      {values.map((value, index) => {
        const isSelected = index === selectedIndex;
        return (
          <CheckItem
            key={value}
            value={value}
            index={index}
            isSelected={isSelected}
            onPress={onChange}
            label={value}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    width: "100%",
  },
  item: {
    padding: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
