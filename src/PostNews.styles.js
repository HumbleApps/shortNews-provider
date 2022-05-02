import { StyleSheet, Appearance } from 'react-native';
import { Colors } from 'react-native-ui-lib';

const colorScheme = Appearance.getColorScheme();

const styles = StyleSheet.create({
  safeAreaContainer: {
    height: '90%',
    backgroundColor: Colors.grey80,
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingBottom: '10%',
  },
  scrollViewContentContainer: {
    marginBottom: '10%',
    paddingBottom: '30%',
  },
  banner: {},
  bannerText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 24,
    color: Colors.blue50,
  },
  floatingPlaceholderStyle: {
    fontWeight: '600',
    fontSize: 16,
    color: Colors.blue50,
  },
  fieldStyle: {
    borderWidth: 1,
    borderTopColor: '#dedede',
    borderColor: '#d8d8f6',
    marginBottom: 8,
    paddingHorizontal: 6,
    backgroundColor: Colors.white,
  },
  fieldText: {
    fontSize: 18,
    fontWeight: '500',
    color: colorScheme === 'dark' ? 'white' : 'black',
  },
  submit: {
    width: '60%',
    alignSelf: 'center',
    marginTop: 20,
  },
  successView: {
    borderWidth: 2,
    marginTop: 16,
    padding: 10,
    borderColor: Colors.green50,
  },
  successMsg: {
    textAlign: 'center',
    color: Colors.green50,
  },
  failedView: {
    borderWidth: 2,
    marginTop: 16,
    padding: 10,
    borderColor: Colors.red5,
  },
  failedMsg: {
    textAlign: 'center',
    color: Colors.red50,
  },
});

export default styles;
