import * as React from "react";
import { Layout } from "../components/Layout";
import { View } from "../components/View";
import { CalendarsSettings } from "../components/CalendarsSettings";
import { ListItem } from "../components/ListItem";
import { useTheme } from "../hooks/useTheme";

export default function SettingsScreen({ navigation }: any) {
  const { theme } = useTheme();
  return (
    <Layout>
      <ListItem
        label="Theme"
        icon="palette"
        iconColor={theme.primary}
        onPress={() => navigation.navigate("ThemeSettingsScreen")}
      />
      <ListItem
        label="Calendars"
        icon="calendar-alt"
        onPress={() => navigation.navigate("ThemeSettingsScreen")}
      />
    </Layout>
  );
}
