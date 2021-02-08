// https://code.tutsplus.com/tutorials/how-to-create-a-react-native-calendar-component--cms-33664
import * as React from "react";
import { View } from "react-native";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function generateMatrix() {
  var matrix = [];
  // Create header
  matrix[0] = weekDays;

  // More code here
}

export const Calendar = (props) => {
  const [activeDate, setActiveDate] = React.useState(new Date());

  var year = activeDate.getFullYear();
  var month = activeDate.getMonth();

  var firstDay = new Date(year, month, 1).getDay();
  var maxDays = nDays[month];
  if (month == 1) {
    // February
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      maxDays += 1;
    }
  }
  return <View></View>;
};
