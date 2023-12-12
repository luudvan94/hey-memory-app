import { makeStyles } from '@rneui/themed';

export default makeStyles(({ spacing }, props) => ({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  eventsList: {
    flex: 1
  }
}));
