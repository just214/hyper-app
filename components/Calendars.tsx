import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Platform,
  ScrollView,
} from "react-native";
import * as Calendar from "expo-calendar";
import type { Calendar as ICalendar } from "expo-calendar";

export function CalendarComponent() {
  const [calendars, setCalendars] = useState<ICalendar[]>([]);
  const [events, setEvents] = useState<Calendar.Event[]>([]);
  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        const calendars = await Calendar.getCalendarsAsync(
          Calendar.EntityTypes.EVENT
        );
        const calendarIds = calendars.map((cal) => cal.id);

        const now = new Date();
        const past = new Date(now.getDate() - 30);
        const events = await Calendar.getEventsAsync(
          calendarIds,
          past,
          new Date()
        );
        setCalendars(calendars);
        setEvents(events);
      }
    })();
  }, []);

  return (
    <ScrollView>
      <Text>Calendars:</Text>
      {calendars.map((cal) => {
        return (
          <View key={cal.id}>
            <Text>{cal.title}</Text>
            <Text>{cal.color}</Text>
            <Text>{cal.source.name}</Text>
          </View>
        );
      })}

      {/* <Text>Events:</Text>
      {events.map((event) => {
        console.log("EVENT: ", event);
        return (
          <View key={event.id}>
            <Text>{event.title}</Text>
          </View>
        );
      })} */}
      <Button title="Create a new calendar" onPress={createCalendar} />
    </ScrollView>
  );
}

async function getDefaultCalendarSource() {
  const calendars = await Calendar.getCalendarsAsync(
    Calendar.EntityTypes.EVENT
  );
  const defaultCalendars = calendars.filter(
    (each) => each.source.name === "Default"
  );
  return defaultCalendars[0].source;
}

async function createCalendar() {
  const defaultCalendarSource =
    Platform.OS === "ios"
      ? await getDefaultCalendarSource()
      : { isLocalAccount: true, name: "Expo Calendar" };
  const newCalendarID = await Calendar.createCalendarAsync({
    title: "Expo Calendar",
    color: "blue",
    entityType: Calendar.EntityTypes.EVENT,
    // @ts-ignore
    sourceId: defaultCalendarSource.id,
    // @ts-ignore
    source: defaultCalendarSource,
    name: "internalCalendarName",
    ownerAccount: "personal",
    accessLevel: Calendar.CalendarAccessLevel.OWNER,
  });
  console.log(`Your new calendar ID is: ${newCalendarID}`);
}
