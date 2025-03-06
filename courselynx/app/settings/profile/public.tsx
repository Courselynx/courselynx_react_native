import { View, Text, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "@/components/Button";
import styles from "./profile.styles";
import Avatar from "@/components/ProfileComponents/Avatar";

interface ProfileProps {
  avatar: string;
  name: string;
  major: string;
  gradYear: string;
  bio: string;
  linkedin: string;
  discord: string;
};

export default function PublicView({ userProfile }: { userProfile: ProfileProps }) {
  const socials = [
    { name: "LinkedIn", id: "linkedin" as const, icon: "logo-linkedin" as const, color: "#0A66C2" },
    { name: "Discord", id: "discord" as const, icon: "logo-discord" as const, color: "#5865F2" },
  ];

  const groupsInCommon = [
    { name: "Business and Finance", color: "#D78787" },
    { name: "Statistics", color: "#8DC78B" },
    { name: "Badminton Club", color: "#E18B40" },
    { name: "Dance1 Club", color: "#D39AD7" },
    { name: "Dance2 Club", color: "#D39AD7" },
    { name: "Dance3 Club", color: "#D39AD7" },
    { name: "Dance4 Club", color: "#D39AD7" },
  ];

  const messageUser = () => {
    console.log("Message");
  }

  return (
    <>
      <View style={[styles.container, styles.lightBackgroundColor]}>
        {/* Profile Header */}
        <View style={[styles.profileContainer, styles.horizontalContainer]}>
          <Avatar src={userProfile.avatar} />

          <View>
            <Text style={styles.name}>{userProfile.name}</Text>
            <Text style={[styles.details, styles.lightTextColor]}>{userProfile.major}</Text>
            <Text style={[styles.details, styles.lightTextColor]}>{userProfile.gradYear}</Text>
          </View>

        </View>
        <Text style={[styles.bio, styles.lightTextColor]}>{userProfile.bio}</Text>

        {/* Social Media Section */}
        <Text style={styles.sectionTitle}>Socials</Text>
        <View style={styles.horizontalContainer}>
          {socials.map((social, index) => (
            <View key={index} style={[styles.item, { width: "48%" }]}>
              <Ionicons name={social.icon} size={50} color={social.color} />

              <View>
                <Text style={styles.label}>{social.name}</Text>
                <Text style={[styles.text, styles.lightTextColor]}>{
                  userProfile[social.id] != "" ? "@" + userProfile[social.id] : "N/A"
                }</Text>
              </View>

            </View>
          ))}
        </View>

        {/* Groups in Common */}
        <Text style={styles.sectionTitle}>Groups in Common [{groupsInCommon.length}]</Text>
        <ScrollView style={styles.scrollContainer}>
          {groupsInCommon.map((group, index) => (
            <View key={index} style={styles.item}>
              <View style={[styles.groupColor, { backgroundColor: group.color }]} />
              <Text style={styles.label}>{group.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Extra padding at the bottom to prevent overlap */}
      <View style={styles.footer} />

      {/* Message Button */}
      <View style={[styles.fixedButtonContainer, styles.lightBackgroundColor]}>
        <Button text="Message" onPress={messageUser} />
      </View>
    </>
  );
};
