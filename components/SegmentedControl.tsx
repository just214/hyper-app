import * as React from "react";
import { View } from "../components/View";
import { Text } from "../components/Text";
import { TouchableOpacity, StyleSheet } from "react-native";

export type SegmentedControlProps = {
  values: string[];
  selectedIndex: number;
  onChange: (e: any) => void;
};

export function SegmentedControl(props: SegmentedControlProps) {
  const { values, selectedIndex } = props;
  return (
    <View style={styles.container}>
      {values.map((value, index) => {
        const isSelected = index === selectedIndex;
        return (
          <TouchableOpacity
            style={{
              backgroundColor: isSelected ? "blue" : "transparent",
              flex: 1,
              alignItems: "center",
              padding: 8,
              borderWidth: 3,
              borderColor: "blue",
            }}
          >
            <Text> {value}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    flexDirection: "row",
  },
});
