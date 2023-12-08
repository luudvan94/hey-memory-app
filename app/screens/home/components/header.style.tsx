import { makeStyles } from '@rneui/themed';

export default makeStyles(({ spacing }, props) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
}));
