import { useRouter } from "expo-router";
import { useState } from "react";
import Modal from "@/components/Modal";

export default function ReportScreen() {
  const router = useRouter();
  const [isModalVisible, setModalVisible] = useState(true);

  const handleCloseModal = () => {
    // Close the modal first, then navigate back, avoid BlurView from re-rendering
    setModalVisible(false);
    setTimeout(() => {
      router.back();
    }, 100);
  };

  const reportMessage = "Please send detailed information related to the problem with relevant evidence (if any) to the following email address:\n\ncontact@courselynx.com";

  return (
    <>
      {isModalVisible && (
        <Modal
          onRequestClose={handleCloseModal}
          text={reportMessage}
        />
      )}
    </>
  );
}
