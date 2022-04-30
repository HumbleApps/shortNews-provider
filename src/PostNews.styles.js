import { StyleSheet, Appearance } from 'react-native';
import { Colors } from 'react-native-ui-lib';

const colorScheme = Appearance.getColorScheme();

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  banner: {},
  bannerText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 24,
  },
  floatingPlaceholderStyle: {
    fontWeight: '500',
    fontSize: 16,
    color: colorScheme === 'dark' ? Colors.blue50 : Colors.info,
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
