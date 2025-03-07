import { View, Text } from 'react-native';
import SearchBar from '@/components/SearchBar';
import styles from './settings.styles';

export default function PrivacyScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>BLOCKED CONTACTS</Text>

      <SearchBar onSearch={() => {}} placeholder="Search contacts to block them..." />

    </View>
  );
}
