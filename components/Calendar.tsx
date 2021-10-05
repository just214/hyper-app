// This is the base calendar
import * as React from "react";
import { Text } from "./Text";
import { View } from "react-native";
import { Control, Controller } from "react-hook-form";
import { CalendarList as DefaultCalendar } from "react-native-calendars";
import { useDimensions } from "../hooks/useDimensions";
import { useTheme } from "../hooks/useTheme";

export type DueDateTimeFormProps = {
  control?: Control;
  onDayPress: (value: any) => void;
  selectedDay: any;
};

export function Calendar(props: DueDateTimeFormProps) {
  const { theme } = useTheme();
  const { onDayPress, selectedDay } = props;

  const { window } = useDimensions();
  return (
    <View style={{ marginTop: 10 }}>
      <DefaultCalendar
        onDayPress={onDayPress}
        pastScrollRange={0}
        current={new Date()}
        style={{ width: window.width - 40 }}
        enableSwipeMonths={true}
        markedDates={{
          [selectedDay]: {
            // @ts-ignore
            selected: true,
            // marked: true,
            // selectedColor: theme.primary,
          },
        }}
        theme={{
          backgroundColor: theme.background,
          calendarBackground: theme.background,
          textSectionTitleColor: theme.text,
          // textSectionTitleDisabledColor: "#d9e1e8",
          selectedDayBackgroundColor: theme.primary,
          selectedDayTextColor: "#ffffff",
          todayTextColor: theme.primary,
          dayTextColor: theme.text,
          textDisabledColor: "red",
          dotColor: theme.primary,
          selectedDotColor: "#ffffff",
          arrowColor: "#ccc",
          // disabledArrowColor: "#d9e1e8",
          monthTextColor: theme.primary,
          indicatorColor: theme.primary,
          // textDayFontFamily: "monospace",
          // textMonthFontFamily: "monospace",
          // textDayHeaderFontFamily: "monospace",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
    </View>
  );
}
