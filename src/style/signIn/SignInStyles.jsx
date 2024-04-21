import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  imageBackgroundImageStyle: {
    borderBottomLeftRadius: 30,

  },
  textContainer: {
    justifyContent: 'center',
    width: '50%',
    marginVertical: '5%',
    alignItems: 'center',
  },
  signInText: {
    fontSize: 22,
    color: 'white',
    fontFamily: 'Sora-Bold',
  },
  backButton: {
    backgroundColor: '#b7bae4',
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    justifyContent: 'center',
    top: 10,
    left: 10,
  },
  backButtonIcon: {
    alignSelf: 'center',
  },
  inputContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '5%',
  },
  textInput: {
    width: '90%',
  },
  emailInput: {
    activeOutlineColor: '#e1e8eb',
    outlineStyle: {
      borderRadius: 10,
      backgroundColor: 'white',
    },
    left: <TextInput.Icon icon="email" />,
   },
  passwordInput: {
    activeOutlineColor: '#e1e8eb',
    outlineStyle: {
      borderRadius: 10,
      backgroundColor: 'white',
    },
    left: <TextInput.Icon icon="lock" />,
  }  ,

  forgotPasswordText: {
    alignSelf: 'flex-end',
    color: '#181d26',
    paddingHorizontal: 10,
    paddingTop: 5,
    fontFamily: 'Sora-Bold',
  },
  signInButton: {
    width: '90%',
    height: '8%',
    backgroundColor: '#5b4dbc',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: '4%',
  },
  signInButtonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Sora-Bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
  },
  divider: {
    flex: 1,
    marginRight: 10,
  },
  orText: {
    color: '#606369',
    fontFamily: 'Sora-Bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3%',
  },
  socialButton: {
    marginHorizontal: 10,
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#f5f6fa',
    borderWidth: 1,
  },
});

export default styles;
