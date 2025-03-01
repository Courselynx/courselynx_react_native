import { useState } from 'react';
import { View, Text } from 'react-native';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import styles from './settings.styles';

export default function DeleteAccountScreen() {
  const [password, setPassword] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const handleDeleteAccount = () => {
    console.log("Delete account...");
  };

  const deleteMessage = "Are you sure you want to delete the account?";

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>CONFIRM ACTION</Text>

        <View style={{ gap: 20, marginTop: 20 }}>
          <InputField
            label="Current Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button
            text="Delete Account"
            onPress={() => setModalVisible(true)}
          />
        </View>
      </View>

      {isModalVisible && (
        <Modal
          onRequestClose={() => setModalVisible(false)}
          text={deleteMessage}
          hasButtonYesNo
          onPressNo={() => setModalVisible(false)}
          onPressYes={handleDeleteAccount}
        />
      )}
    </>
  );
}
