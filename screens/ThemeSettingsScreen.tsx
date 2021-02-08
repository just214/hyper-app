import * as React from "react";
import { View } from "../components/View";
import { Heading } from "../components/Heading";
import { VerticalSelect } from "../components/VerticalSelect";
import { PrimaryColorSelect } from "../components/PrimaryColorSelect";
import { useStoreActions, useStoreState } from "../store";
import { constantCase, capitalCase } from "../utils";

const options = ["System", "Light", "Dark"];

const primaryColorOptions = [
  { name: "cyan", value: "#2CB1BC" },
  { name: "bluegray", value: "#627D98" },
  { name: "indigo", value: "#4C63B6" },
  { name: "pink", value: "#DA4A91" },
  { name: "red", value: "#D64545" },
  { name: "purple", value: "#3525E6" },
  { name: "teal", value: "#199473" },
];

export default function ThemeSettingsScreen() {
  const updateThemePreference = useStoreActions(
    (actions) => actions.updateThemePreference
  );

  const updatePrimaryColorPreference = useStoreActions(
    (actions) => actions.updatePrimaryColorPreference
  );

  const themePreference = useStoreState(
    (state) => state.userProfile?.theme_preference
  );

  const primary_color_preference = useStoreState(
    (state) => state.userProfile?.primary_color_preference
  );

  function handleUpdateTheme(value: any) {
    // @ts-ignore
    updateThemePreference(constantCase(value));
  }

  function handleUpdatePrimaryColorPreference(value: string) {
    updatePrimaryColorPreference(value);
  }

  const themePreferenceFormatted = capitalCase(themePreference as string);

  const selectedThemeIndex = options.findIndex(
    (value) => value === themePreferenceFormatted
  );

  const selectedPrimaryColorPreferenceIndex = primaryColorOptions.findIndex(
    (value) => value.value === primary_color_preference
  );

  // console.log(primary_color_preference, themePreference, selectedThemeIndex);

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
      }}
    >
      <Heading text="Choose your theme" />

      <VerticalSelect
        values={options}
        selectedIndex={selectedThemeIndex}
        onChange={handleUpdateTheme}
      />

      <Heading text="Choose your primary color" />

      <PrimaryColorSelect
        colors={primaryColorOptions}
        selectedIndex={selectedPrimaryColorPreferenceIndex}
        onPress={handleUpdatePrimaryColorPreference}
      />
    </View>
  );
}
