import { makeStyles } from '@rneui/themed';

export default makeStyles(({ spacing }, props) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff'
  },

  eventsList: {
    width: '100%',
    height: '100%'
  }
}));
