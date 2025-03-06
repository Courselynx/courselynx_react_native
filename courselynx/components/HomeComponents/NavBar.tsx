import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

interface NavBarProps {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
}

export default function NavBar({ activeScreen, setActiveScreen }: NavBarProps) {

  const tabs = [
    { name: "Chats", activeIcon: "chatbubble-ellipses" as const, inactiveIcon: "chatbubble-ellipses-outline" as const },
    { name: "Courses", activeIcon: "book" as const, inactiveIcon: "book-outline" as const },
  ];

  const handlePress = async (screen: string) => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setActiveScreen(screen);
  };

  return (
    <>
      <View style={styles.navContainer}>
        {tabs.map((tab) => (
          <Pressable key={tab.name} onPress={() => handlePress(tab.name)}>
            <View style={styles.navButton}>
              <Ionicons
                name={activeScreen === tab.name ? tab.activeIcon : tab.inactiveIcon}
                size={28}
                color="#fff"
              />
              <Text style={[styles.navText, activeScreen === tab.name && styles.activeText]}>
                {tab.name}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>

      {/* add correct link later*/}
      <Link href="/" asChild>
        <Pressable style={styles.addCourseButton}>
          <Ionicons name="add" size={34} color="#fff" />
        </Pressable>
      </Link>
    </>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 60,
    gap: 40,
    paddingHorizontal: 10,
    backgroundColor: "#3B82F6",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
  navButton: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    marginTop: 4,
    fontSize: 12,
    color: "#fff",
  },
  activeText: {
    fontWeight: "bold",
  },
  addCourseButton: {
    position: "absolute",
    bottom: 120,
    right: 20,
    width: 55,
    height: 55,
    borderRadius: 12,
    backgroundColor: "#3B82F6",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
});
