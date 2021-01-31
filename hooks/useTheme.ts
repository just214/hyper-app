import useColorScheme from "./useColorScheme";

// The user's dark mode and tint color settings
// should be persisted in th database under
// the user's profile and retrieved here.

export function useTheme() {
  const tintColorLight = "#2f95dc"; // Blueish  GET FROM DB
  const tintColorDark = "#fff";
  const darkestgray = "#262626";
  const lightgray = "#ccc";
  const lightestgray = "#f5f5f5";

  const colors = {
    light: {
      text: darkestgray,
      background: "#f5f5f5",
      altBackground: "white",
      tint: tintColorLight,
      tabIconDefault: lightgray,
      tabIconSelected: tintColorLight,
    },
    dark: {
      text: lightestgray,
      background: darkestgray,
      altBackground: "#262626",
      tint: tintColorDark,
      tabIconDefault: lightgray,
      tabIconSelected: tintColorDark,
    },
  };

  function applyThemeColor(
    props: { light?: string; dark?: string },
    colorName: keyof typeof colors.light & keyof typeof colors.dark
  ) {
    const theme = useColorScheme();
    const colorFromProps = props[theme];

    if (colorFromProps) {
      return colorFromProps;
    } else {
      return colors[theme][colorName];
    }
  }

  return {
    colors,
    applyThemeColor,
  };
}
