import { useState } from 'react';
import { View, Text } from 'react-native';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import styles from './settings.styles';

export default function SecurityScreen() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdatePassword = () => {
    console.log("Updating password...");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>CHANGE PASSWORD</Text>

      <View style={{ gap: 20, marginTop: 20 }}>
        <InputField
          label="Current Password"
          value={currentPassword}
          onChangeText={setCurrentPassword}
          secureTextEntry
        />
        <InputField
          label="New Password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry
        />
        <InputField
          label="Confirm New Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <Button
          text="Update Password"
          onPress={handleUpdatePassword}
        />
      </View>

    </View>
  );
}
