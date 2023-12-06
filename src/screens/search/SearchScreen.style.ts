import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 10,
    height: 50
  },
  input: {
    flex: 2,
    height: '100%',
    backgroundColor: '#f0f0f0',
    padding: 5
  }
});
