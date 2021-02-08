export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  BlockForm: undefined;
};

export type BottomTabParamList = {
  Schedule: undefined;
  Blocks: undefined;
  Insights: undefined;
  Settings: undefined;
};

export type ScheduleParamList = {
  ScheduleScreen: undefined;
};

export type BlocksParamList = {
  BlocksScreen: undefined;
};

export type InsightsParamList = {
  InsightsScreen: undefined;
};

export type SettingsParamList = {
  SettingsScreen: undefined;
  ThemeSettingsScreen: undefined;
};

type DayOfTheWeek = "Monday" | "Tuesday";

/*
 * Which fields should be able to be overwritten on a per-instance basis?
 *
 */

type ID = string;

export type Block = {
  id: ID;
  userID: ID;
  title: string; // required
  notes: string;
  url: string;

  // S3
  imageOrFile: unknown;

  // Labels
  labels: string[];

  // Timer
  timer_seconds: number;

  // Status
  status: "complete" | "incomplete";

  // Due Date and Time
  due_date: string;
  due_time: string;

  // Reminders
  reminder_date: string;
  reminder_time: string;

  // Automate
  repeat_count: number;
  repeat_frequency: "day" | "week" | "month" | "year";
  repeat_weekly_days: DayOfTheWeek[];
  repeat_monthly_value: 1 | 2 | 3 | "last";
  repeat_monthly_frequency: "day" | DayOfTheWeek;
};

export type Instance = {
  userID: string;
  blockID: string;
};

export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type UserProfile = {
  id: ID;
  userID: ID;
  preferredColor: string;
};
