import * as React from "react";
import { StyleSheet } from "react-native";
import { Text } from "../components/Text";
import { View } from "../components/View";
import { CalendarsSettings } from "../components/CalendarsSettings";
import { Layout } from "../components/Layout";
import { Switch, useColorScheme } from "react-native";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <Layout>
      <View>
        <Text>Settings</Text>

        <Text>Dark Mode</Text>

        <Switch
          value={darkMode}
          onValueChange={(value) => setDarkMode(value)}
        />
      </View>
    </Layout>
  );
}
