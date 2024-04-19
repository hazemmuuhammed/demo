import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from '../style/signIn/SignInStyles';

export default function InputField({ label, placeholder, value, onChangeText,activeOutlineColor,outlineStyle, isPassword = false }) {
  return (
      <TextInput
        placeholder={placeholder}
        mode="outlined"
        style={styles.textInput}
        label={label}
        value={value}
        activeOutlineColor={activeOutlineColor}
        outlineStyle={outlineStyle}
        onChangeText={onChangeText}
        secureTextEntry={isPassword}
      />
  );
}
