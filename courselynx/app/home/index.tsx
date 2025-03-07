import { useState } from "react";
import NavBar from "../../components/HomeComponents/NavBar";
import HomeHeader from "@/components/HomeComponents/Header";
import ChatsTab from "./chats";
import CoursesTab from "./courses";

export default function HomeScreen() {
  const [activeScreen, setActiveScreen] = useState("Chats");

  return (
    <>
      <HomeHeader />

      {activeScreen === "Chats" ? <ChatsTab /> : <CoursesTab />}

      <NavBar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </>
  );
}
