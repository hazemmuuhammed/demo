import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'column',
    justifyContent:"center",
    alignContent:"center",
    height: '30%',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  imageStyle: {
    borderBottomLeftRadius: 30,
  },
  headerTextContainer: {
    justifyContent: 'center',
    width: '50%',
    alignItems: 'center',
  },
  headerText: {
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
  backButtonContainer: {
   justifyContent: 'center',
   alignItems: 'center',
   alignSelf: 'center',
   
  },
  backButtonIcon: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  formContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '5%',
  },
  textInput: {
    width: '90%',
    marginBottom: 10,
  
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '90%',
  },
  checkbox: {
    width: 24,
    height: 24,
  },
  checkboxText: {
    width: '58%',
    fontFamily: 'Sora-Regular',
  },
  button: {
    width: '90%',
    height: '8%',
    backgroundColor: '#5b4dbc',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: '9%',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Sora-Bold',
  },
});

export default styles;
