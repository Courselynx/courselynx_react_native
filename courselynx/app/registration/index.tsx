
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Basic export function with View for the Register text, this is all template stuff and we will scrap most
export default function RegisterPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
    </View>
  );
}

// Some simple template style sheet stuff that we probably wont use
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});

