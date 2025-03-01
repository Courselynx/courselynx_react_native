import { useState } from "react";
import { View, Text } from "react-native";
import Switch from "@/components/Switch";
import styles from "./settings.styles";

export default function NotificationScreen() {
  const notifications = {
    "ALL NOTIFICATIONS": [
      { label: "Mute", key: "isMuted", value: false },
      { label: "Vibrate", key: "isVibrate", value: true },
    ],
  };

  // Build initial state object from toggleItems array
  const [toggleStates, setToggleStates] = useState(() => {
    const initialState: Record<string, boolean> = {};
    Object.entries(notifications).map(([section, items]) => {
      items.forEach((item) => {
        initialState[item.key] = item.value;
      });
    });
    return initialState;
  });

  // Handler to update a specific toggle
  const handleToggle = (key: string, value: boolean) => {
    setToggleStates((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <View style={styles.container}>
      {Object.entries(notifications).map(([section, items], sectionIndex) => (
        <View key={sectionIndex}>
          <Text style={styles.sectionTitle}>{section}</Text>
          
          <View style={styles.sectionContainer}>
            {items.map((item, index) => (
              <View style={[styles.sectionRow, {justifyContent: "space-between"}]} key={index}>

                <Text style={styles.sectionText}>{item.label}</Text>
                <Switch
                  value={toggleStates[item.key]}
                  onValueChange={(value) => handleToggle(item.key, value)}
                />

              </View>
            ))}
          </View>
          
        </View>
      ))}
    </View>
  );
}
