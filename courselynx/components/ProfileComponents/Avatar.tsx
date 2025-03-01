import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface AvatarProps {
  src: string;
  onEdit: () => void;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  onEdit,
}) => {
  return (
    <View>
      <Image source={{uri: src}} style={styles.avatar} />
      <TouchableOpacity style={styles.editButton} onPress={onEdit}>
        <Ionicons name="pencil" size={18} color="white" />
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  editButton: {
    position: "absolute",
    bottom: 5,
    left: "50%",
    transform: [{ translateX: 45 }],
    backgroundColor: "rgba(45, 138, 251, 1)",
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Avatar;
