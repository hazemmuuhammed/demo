import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../style/signIn/SignInStyles';

export default function SignInButton({ onPress, buttonText }) {
  return (
    <TouchableOpacity style={styles.signInButton} onPress={onPress}>
      <Text style={styles.signInButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
