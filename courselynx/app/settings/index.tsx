import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import styles from "./settings.styles";

export default function SettingsScreen() {
  const settingsOptions = {
    "ACCOUNT": [
      { label: "Notifications", icon: "notifications-outline" as const, href: "/settings/notifications" as const },
      { label: "Security", icon: "shield-checkmark-outline" as const, href: "/settings/security" as const },
      { label: "Privacy", icon: "lock-closed-outline" as const, href: "/settings/privacy" as const },
    ],
    "ACTIONS": [
      { label: "Report a Problem", icon: "flag-outline" as const, href: "/settings/report" as const },
      { label: "Delete Account", icon: "person-remove-outline" as const, href: "/settings/delete" as const },
      { label: "Sign Out", icon: "log-out-outline" as const, href: "/settings/signout" as const },
    ],
  };

  return (
    <View style={styles.container}>
      {Object.entries(settingsOptions).map(([section, options]) => (
        <View key={section}>
          <Text style={styles.sectionTitle}>{section}</Text>
          
          <View style={styles.sectionContainer}>
            {options.map((item, index) => (
              <Link href={item.href} key={index} asChild>

                <TouchableOpacity key={index} style={styles.sectionRow}>
                  <Ionicons name={item.icon} size={24} />
                  <Text style={styles.sectionText}>{item.label}</Text>
                </TouchableOpacity>
                
              </Link>
            ))}
          </View>
          
        </View>
      ))}
    </View>
  );
}
