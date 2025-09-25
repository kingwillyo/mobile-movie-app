import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#161616",
          height: 80,
          paddingTop: 8,
          paddingLeft: 24,
          paddingRight: 24,
          gap: 24,
        },
        tabBarItemStyle: {
            width: "100%",
            height: "100%",

          },
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 9,
          fontWeight: "bold",
          marginBottom: 4,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#888",
        tabBarIconStyle: {
 
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <Image source={icons.home} className="size-[20px]" />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <Image source={icons.search} className="size-[20px]" />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <Image source={icons.saved} className="size-[20px]" />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <Image source={icons.profile} className="size-[20px]" />
            </>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
