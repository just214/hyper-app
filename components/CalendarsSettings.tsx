import React, { useEffect, useState } from "react";
import _ from "lodash";
import {
  StyleSheet,
  View,
  Text,
  Switch,
  Platform,
  ScrollView,
} from "react-native";
import * as Calendar from "expo-calendar";
import type { Calendar as ICalendar } from "expo-calendar";
import { Picker } from "@react-native-picker/picker";

export function CalendarsSettings() {
  const [calendars, setCalendars] = useState<{ [key in string]: ICalendar[] }>(
    {}
  );

  const [selectedValue, setSelectedValue] = useState<any>("java");

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        const calendars = await Calendar.getCalendarsAsync(
          Calendar.EntityTypes.EVENT
        );
        const calendarIds = calendars.map((cal) => cal.id);
        const items = _.groupBy(calendars, "source.name");
        setCalendars(items);
      }
    })();
  }, []);

  return (
    <View>
      <View style={styles.picker}>
        <Picker
          selectedValue="1"
          style={{ height: 50, width: 150 }}
          // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
        </Picker>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
      {/* <View>
        <Text>Calendars:</Text>
        {Object.keys(calendars).map((key) => {
          return (
            <View key={key}>
              <Text>{key}</Text>
              {calendars[key].map((cal) => {
                const circleStyles = StyleSheet.create({
                  circle: {
                    height: 10,
                    width: 10,
                    borderRadius: 20,
                    backgroundColor: cal.color,
                  },
                });
                return (
                  <View key={cal.id} style={styles.wrapper}>
                    <View style={circleStyles.circle} />
                    <Text>{cal.title}</Text>
                    <Switch value={true} />
                  </View>
                );
              })}
            </View>
          );
        })}
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  picker: {
    height: 400,
    display: "flex",
    flexDirection: "row",
  },
});
