import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d26060',
    justifyContent: 'center',
    height: '15%',
    paddingHorizontal: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backButtonContainer: {
    backgroundColor: '#b7bae4',
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    backgroundColor: '#6556cc',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonIcon: {
    alignSelf: 'center',
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Sora-Bold',
  },
  weatherItem: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  weatherTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  weatherLocation: {
    fontSize: 16,
  },
  weatherDate: {
    fontSize: 16,
    marginBottom: 5,
  },
  flatListContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default styles;
