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
import {Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from '../style/signIn/SignInStyles';
import SignInButton from '../components/Button';
import InputField from '../components/InputField';
export default function SignIn() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigation = useNavigation();

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={{flexDirection: 'column', height: '30%'}}>
          <ImageBackground
            source={require('../assets/header.jpg')}
            style={styles.imageBackground}
            imageStyle={styles.imageBackgroundImageStyle}>
            <View style={styles.textContainer}>
              <Text style={styles.signInText}>Sign In to your account</Text>
            </View>
          </ImageBackground>

          <TouchableOpacity style={styles.backButton}>
            <Icon
              name="chevron-left"
              size={45}
              color="white"
              style={styles.backButtonIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <InputField
            {...styles.emailInput}
            placeholder="Enter your Email"
            activeOutlineColor="#e1e8eb"
            mode="outlined"
            outlineStyle={{borderRadius: 10, backgroundColor: 'white'}}
            style={styles.textInput}
            label="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <InputField
            {...styles.passwordInput}
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            isPassword={true}
          />

          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>

        <SignInButton
          onPress={() => navigation.navigate('SignUp')}
          buttonText="Sign In"
        />

        <View style={styles.dividerContainer}>
          <Divider style={styles.divider} />
          <Text style={styles.orText}>Or</Text>
          <Divider style={styles.divider} />
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => console.log('Facebook button pressed')}>
            <Icon name="sc-facebook" size={40} color="#1877f2" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => console.log('Google button pressed')}>
            <Icon name="sc-google-plus" size={40} color="red" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => console.log('Twitter button pressed')}>
            <Icon name="sc-twitter" size={40} color="#08a0e9" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
