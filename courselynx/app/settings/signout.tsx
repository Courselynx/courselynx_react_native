import { useRouter } from "expo-router";
import { useState } from "react";
import Modal from "@/components/Modal";

export default function SignoutScreen() {
  const router = useRouter();
  const [isModalVisible, setModalVisible] = useState(true);

  const handleCloseModal = () => {
    // Close the modal first, then navigate back, avoid BlurView from re-rendering
    setModalVisible(false);
    setTimeout(() => {
      router.back();
    }, 100);
  };

  const handleSignout = () => {
    console.log("Sign out...");
  }

  const signoutMessage = "Are you sure you want to sign out?";

  return (
    <>
      {isModalVisible && (
        <Modal
          onRequestClose={handleCloseModal}
          text={signoutMessage}
          hasButtonYesNo
          onPressNo={handleCloseModal}
          onPressYes={handleSignout}
        />
      )}
    </>
  );
};
