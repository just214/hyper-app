import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Schedule: {
            screens: {
              ScheduleScreen: "schedule",
            },
          },
          Blocks: {
            screens: {
              BlocksScreen: "blocks",
            },
          },
          Insights: {
            screens: {
              InsightsScreen: "insights",
            },
          },
          Settings: {
            screens: {
              SettingsScreen: "settings",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
