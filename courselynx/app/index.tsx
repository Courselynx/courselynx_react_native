import { Link } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity style={styles.devButton}>
        <Link href={"/chat"}>
          <Text>Group Chat Page</Text>
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.devButton}>
        <Link href={"/registration"}>
          <Text>Registration</Text>
        </Link>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  devButton: {
    color: "black",
    padding: 4,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "lightGray",
  },
});
