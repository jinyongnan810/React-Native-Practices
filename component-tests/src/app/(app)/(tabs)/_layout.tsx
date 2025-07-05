import {
  createNativeBottomTabNavigator,
  NativeBottomTabNavigationEventMap,
  NativeBottomTabNavigationOptions,
} from "@bottom-tabs/react-navigation";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";
import React from "react";

const BottomTabNavigator = createNativeBottomTabNavigator().Navigator;

const Tabs = withLayoutContext<
  NativeBottomTabNavigationOptions,
  typeof BottomTabNavigator,
  TabNavigationState<ParamListBase>,
  NativeBottomTabNavigationEventMap
>(BottomTabNavigator);
const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="(part1)"
        options={{
          title: "Part1",
          tabBarIcon: () => ({ sfSymbol: "house" }),
        }}
      />
      <Tabs.Screen
        name="(part2)"
        options={{
          title: "Part2",
          tabBarIcon: () => ({ sfSymbol: "person" }),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
