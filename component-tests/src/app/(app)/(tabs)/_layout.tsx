import {
  createNativeBottomTabNavigator,
  NativeBottomTabNavigationEventMap,
  NativeBottomTabNavigationOptions,
} from "@bottom-tabs/react-navigation";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { useSegments, withLayoutContext } from "expo-router";
import React, { useEffect, useMemo } from "react";

const BottomTabNavigator = createNativeBottomTabNavigator().Navigator;

const Tabs = withLayoutContext<
  NativeBottomTabNavigationOptions,
  typeof BottomTabNavigator,
  TabNavigationState<ParamListBase>,
  NativeBottomTabNavigationEventMap
>(BottomTabNavigator);
const TabLayout = () => {
  const segments = useSegments();

  const selectedTab = useMemo(() => {
    // console.log("Segments:", segments);
    if (segments.length < 3) {
      return "";
    }
    return segments[2];
  }, [segments]);

  useEffect(() => {
    // This effect can be used to perform actions when the selected tab changes
    console.log(`Selected tab: ${selectedTab}`);
  }, [selectedTab]);
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
