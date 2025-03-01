import Header from "@/components/Header";
import { useLocalSearchParams } from "expo-router";
import PublicView from "./public";
import EditView from "./edit";

export default function ProfileScreen() {
  const { username } = useLocalSearchParams() || {};

  const data = {
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Bohol_-_Chocolate_Hills.jpg/2560px-Bohol_-_Chocolate_Hills.jpg",
    name: "Ana Souza",
    major: "Computer Science",
    gradYear: "2026",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur",
    linkedin: "abcxyz",
    discord: "",
  }

  if (username) {
    return username === "myself" ? (
      <>
        <Header
          title={"My Profile"}
          hasShare={true}
          hasSettings={true}
          withBorder
        />
        <EditView userProfile={data} />
      </>
    ) : (
      <>
        <Header
          title={"Profile"}
          hasShare={true}
          withBorder
        />
        <PublicView userProfile={data} />
      </>
    );
  }

  return (
    <>
      <Header title={"No Found"} />
    </>
  );
}
