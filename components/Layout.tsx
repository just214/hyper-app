import * as React from "react";
import { StyleSheet } from "react-native";
import { View } from "../components/View";
import { Fab } from "./Fab";

export type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <View style={styles.container}>
      {children}
      <Fab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
