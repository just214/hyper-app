import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, Platform } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import { BlockFormScreen } from "../screens/BlockFormScreen";

import { Button } from "react-native";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  // console.log(Platform);
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }} mode="modal">
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!", headerShown: false }}
      />

      <Stack.Screen
        name="BlockForm"
        component={BlockFormScreen}
        options={(props) => {
          return {
            headerTitle: "Add a Block",
            // headerBackTitle: "Cancel",
            headerLeft: ({ onPress, ...rest }) => (
              <Button {...rest} title="Cancel" onPress={onPress as any} />
            ),
            headerRight: () => <Button title="Add" onPress={() => {}} />,
          };
        }}
      />
    </Stack.Navigator>
  );
}
