import * as React from "react";
import { Text } from "../components/Text";
import { StyleSheet } from "react-native";

export type HeadingProps = {
  text: React.ReactChild;
};
export function Heading(props: HeadingProps) {
  return <Text style={[styles.text]}>{props.text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginVertical: 10,
  },
});
