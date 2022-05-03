import { StyleSheet, Appearance } from 'react-native';

const colorScheme = Appearance.getColorScheme();

const styles = StyleSheet.create({
  cardContainer: {
    height: 100,
    marginBottom: 6,
  },
  card: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
  },
  cardImage: {
    // height: 100,
    width: '20%',
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 0,
  },
  cardContentContainer: {
    padding: 8,
    width: '80%',
    justifyContent: 'space-between',
    backgroundColor: colorScheme !== 'dark' ? 'white' : 'black',
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    color: colorScheme === 'dark' ? 'white' : 'black',
    textAlign: 'justify',
    flexWrap: 'wrap',
    flex: 1,
  },
  subtitle: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'baseline',
  },
  published: {
    color: '#00e98f',
    fontSize: 12,
  },
  timestamp: {
    fontSize: 12,
  },
  ctaButtonContainer: {
    flexDirection: 'row',
  },
  delete: {
    width: 70,
    marginLeft: 10,
  },
});

export default styles;
