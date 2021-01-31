import * as React from "react";
import { StyleSheet } from "react-native";
import { Block as BlockType } from "../models";
import { Card } from "../components/Card";
import { Text } from "../components/Text";
import { View } from "../components/View";

export type BlockProps = {
  block: BlockType;
};

export function Block({ block }: BlockProps) {
  return (
    <Card style={styles.card}>
      <View>
        <Text style={styles.title}>{block.title}</Text>
        <Text style={styles.notes}>{block.notes}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    margin: 8,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    paddingBottom: 5,
  },
  notes: {
    fontSize: 14,
  },
});
