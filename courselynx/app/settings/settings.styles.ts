import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 20,
  },
  sectionContainer: {
    backgroundColor: "rgba(45, 138, 251, 0.1)",
    borderRadius: 15,
    padding: 15,
    gap: 20,
  },
  sectionRow: {
    width: "100%",
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  },
  sectionText: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default styles;
