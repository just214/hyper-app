import * as React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { Text } from "./Text";
import { View } from "./View";
import { useTheme } from "../hooks/useTheme";
import { Icon } from "./Icon";

export type CheckItemProps = {
  icon?: any;
  label?: string;
  renderLabel?: React.FC;
  value?: number | string;
  onPress: (value: number | string | undefined, index: number) => void;
  isSelected: boolean;
  index: number;
};

export function CheckItem(props: CheckItemProps) {
  const { value, onPress, isSelected, index, label, renderLabel: Ren } = props;
  const { theme } = useTheme();

  function handleOnPress() {
    onPress(value, index);
  }
  return (
    <View style={styles.container}>
      <TouchableHighlight key={value} onPress={handleOnPress}>
        <View style={styles.item}>
          {label && <Text style={{ fontSize: 20 }}> {label}</Text>}
          {Ren && <Ren />}

          {isSelected && <Icon name="check" size="xl" color={theme.text} />}
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#999",
    borderBottomWidth: 1,
  },
  item: {
    padding: 8,
    paddingVertical: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
