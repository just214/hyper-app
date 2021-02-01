import { Icon } from "../components/Icon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import useColorScheme from "../hooks/useColorScheme";
import ScheduleScreen from "../screens/ScheduleScreen";
import InsightsScreen from "../screens/InsightsScreen";
import BlocksScreen from "../screens/BlocksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  BottomTabParamList,
  ScheduleParamList,
  BlocksParamList,
  InsightsParamList,
  SettingsParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Schedule"
      // tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Schedule"
        component={ScheduleNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calendar-week" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Blocks"
        component={BlocksNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="cube" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Insights"
        component={InsightsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="chart-line" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="sliders-h" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>["name"];
  color: string;
}) {
  return <Icon size="xl" style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ScheduleStack = createStackNavigator<ScheduleParamList>();

function ScheduleNavigator() {
  return (
    <ScheduleStack.Navigator>
      <ScheduleStack.Screen
        name="ScheduleScreen"
        component={ScheduleScreen}
        options={{ headerTitle: "Schedule" }}
      />
    </ScheduleStack.Navigator>
  );
}

const BlocksStack = createStackNavigator<BlocksParamList>();

function BlocksNavigator() {
  return (
    <BlocksStack.Navigator>
      <BlocksStack.Screen
        name="BlocksScreen"
        component={BlocksScreen}
        options={{ headerTitle: "Blocks" }}
      />
    </BlocksStack.Navigator>
  );
}

const InsightsStack = createStackNavigator<InsightsParamList>();

function InsightsNavigator() {
  return (
    <InsightsStack.Navigator>
      <InsightsStack.Screen
        name="InsightsScreen"
        component={InsightsScreen}
        options={{ headerTitle: "Insights" }}
      />
    </InsightsStack.Navigator>
  );
}

const SettingsStack = createStackNavigator<SettingsParamList>();

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerTitle: "Settings" }}
      />
    </SettingsStack.Navigator>
  );
}
