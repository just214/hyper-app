import * as React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { Text } from "../components/Text";
import { View } from "../components/View";
import { useTheme } from "../hooks/useTheme";
import { Icon } from "../components/Icon";

export type SettingsLink = {
  icon: any;
  label: string;
  value?: string;
  onPress: () => void;
};

export function SettingsLink(props: SettingsLink) {
  const { applyThemeColor } = useTheme();
  const backgroundColor = applyThemeColor({}, "background");
  const altBackgroundColor = applyThemeColor({}, "altBackground");
  return (
    <View style={{ paddingBottom: 6 }}>
      <TouchableHighlight
        onPress={props.onPress}
        style={styles.highlight}
        activeOpacity={0.6}
        underlayColor={backgroundColor}
      >
        <View style={styles.container}>
          <View style={styles.intro}>
            <Icon
              name={props.icon}
              size="xl"
              color="#999"
              style={{ paddingRight: 10 }}
            />
            <Text size="lg">{props.label}</Text>
          </View>
          <View style={styles.end}>
            <Text style={styles.value}>{props.value}</Text>
            <Icon name="angle-right" size="lg" color="#ccc" />
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  highlight: {
    padding: 6,
    borderRadius: 10,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
  },
  intro: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  end: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  value: {
    fontSize: 18,
    marginRight: 8,
    color: "#999",
    fontWeight: "500",
  },
});
