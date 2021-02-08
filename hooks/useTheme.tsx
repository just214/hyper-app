import useColorScheme from "./useColorScheme";
import { useStoreState } from "../store";

export function useTheme() {
  const userPrimaryColorPreference = useStoreState(
    (state) => state.userProfile?.primary_color_preference
  );

  const userThemePreference = useStoreState(
    (state) => state.userProfile?.theme_preference
  );

  const THEME_MAP = {
    SYSTEM: useColorScheme(),
    LIGHT: "light",
    DARK: "dark",
  };

  const grays = {
    100: "#f7fafc",
    200: "#edf2f7",
    300: "#e2e8f0",
    400: "#cbd5e0",
    500: "#a0aec0",
    600: "#718096",
    700: "#4a5568",
    800: "#2d3748",
    900: "#1a202c",
  };

  // @ts-ignore
  const mode: "light" | "dark" = THEME_MAP[userThemePreference];

  const baseColors = {
    primary: userPrimaryColorPreference,
    white: "#fffff",
    black: "#000000",
    gray: grays,
    tint: userPrimaryColorPreference,
    tabIconSelected: userPrimaryColorPreference,
    tabIconDefault: grays[500],
  };

  const themedColors = {
    light: {
      text: baseColors.gray[900],
      altText: baseColors.gray[600],
      background: baseColors.gray[100],
      altBackground: baseColors.gray[300],
    },
    dark: {
      text: baseColors.gray[100],
      altText: baseColors.gray[300],
      background: baseColors.gray[900],
      altBackground: baseColors.gray[700],
    },
  };

  function applyThemeColor(
    props: { light?: string; dark?: string },
    colorName: keyof typeof themedColors.light & keyof typeof themedColors.dark
  ) {
    // SYSTEM | LIGHT | DARK

    // @ts-ignore
    const theme = THEME_MAP[userThemePreference]; // needs to resolve to "light" or "dark"

    // @ts-ignore
    const colorFromProps = props[theme];

    if (colorFromProps) {
      return colorFromProps;
    } else {
      // @ts-ignore
      return themedColors[theme][colorName];
    }
  }

  return {
    // This is the derived theme values based on the current mode
    theme: {
      ...themedColors[mode as "dark" | "light"],
      ...baseColors,
    },
    applyThemeColor,
    mode,
  };
}
