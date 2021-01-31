import * as React from "react";
import { Modal as DefaultModal, Button, StyleSheet } from "react-native";

import { View } from "../components/View";

export type ModalProps = {
  onRequestClose: () => void;
  isVisible: boolean;
  children: React.ReactNode;
};

export function Modal(props: ModalProps) {
  const { children, isVisible, onRequestClose } = props;
  return (
    <DefaultModal
      visible={isVisible}
      animationType="slide"
      presentationStyle="formSheet"
      onDismiss={onRequestClose}
      onRequestClose={onRequestClose}
    >
      <View style={styles.container} useTheme={true}>
        <View style={styles.header}>
          <Button title="Done" onPress={onRequestClose} />
        </View>
        {children}
      </View>
    </DefaultModal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
