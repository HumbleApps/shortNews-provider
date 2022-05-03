import { StyleSheet, Appearance } from 'react-native';
import { Colors } from 'react-native-ui-lib';

const colorScheme = Appearance.getColorScheme();

const styles = StyleSheet.create({
  safeAreaContainer: {},
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingBottom: '10%',
  },
  scrollViewContentContainer: {
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
  },
  fieldText: {
    fontSize: 18,
    fontWeight: '500',
    color: colorScheme === 'dark' ? 'white' : 'black',
  },
  submit: {
    width: '40%',
    alignSelf: 'center',
    marginTop: 20,
  },
  cancel: {
    width: '40%',
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
  ctaButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default styles;
