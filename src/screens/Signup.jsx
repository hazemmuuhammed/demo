import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput, Checkbox} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import styles from '../style/signUp/SignUpStyles';
import Icon from 'react-native-vector-icons/EvilIcons';
export default function Signup() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  const navigation = useNavigation();
  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.headerContainer}>
          <ImageBackground
            source={require('../assets/header.jpg')}
            style={styles.imageBackground}
            imageStyle={styles.imageStyle}
          >
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>Sign Up to your account</Text>
            </View>
          </ImageBackground>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Icon name="chevron-left" size={45} color="white" style={styles.backButtonIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            labelStyle={{fontFamily: 'Sora-Regular'}}
            placeholderTextColor="#666666"
            placeholderStyle={{fontFamily: 'Sora-Regular'}}
            theme={{fonts: {regular: 'Sora-Regular'}}}
            activeOutlineColor="#e1e8eb"
            outlineStyle={{borderRadius: 10, backgroundColor: 'white'}}
            placeholder="Enter your email"
            mode="outlined"
            style={[styles.textInput, {fontFamily: 'Sora-Regular'}]}
            label="User name"
            value={username}
            onChangeText={setUsername}
          />


          <TextInput
            activeOutlineColor="#e1e8eb"
            outlineStyle={{borderRadius: 10, backgroundColor: 'white'}}
            placeholder="Enter your email"
            mode="outlined"
            style={styles.textInput}
            label="Email"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            activeOutlineColor="#e1e8eb"
            outlineStyle={{borderRadius: 10, backgroundColor: 'white'}}
            placeholder="Enter your Password"
            mode="outlined"
            style={styles.textInput}
            label="Password"
            value={password}
            onChangeText={setPassword}
            right={<TextInput.Icon icon="eye" />}
          />

          <TextInput
            activeOutlineColor="#e1e8eb"
            outlineStyle={{borderRadius: 10, backgroundColor: 'white'}}
            placeholder="Enter your Password"
            mode="outlined"
            style={styles.textInput}
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
  
          
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => setChecked(!checked)}
              style={styles.checkbox}
            />
            <Text style={styles.checkboxText}>
              I accept & agree terms conditions & privacy policy{' '}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
