import * as React from "react";
import { StyleSheet } from "react-native";
import { View } from "../components/View";
import { AddBlockButton } from "./AddBlockButton";

export type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <View style={styles.container}>
      {children}
      <AddBlockButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
