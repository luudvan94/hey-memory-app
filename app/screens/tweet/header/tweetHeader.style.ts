import { makeStyles } from '@rneui/themed';

export default makeStyles(({ colors }, props) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey4
  },
  cancel: {
    backgroundColor: 'transparent',
    color: colors.secondary
  },
  cancelContainer: {
    backgroundColor: 'transparent'
  }
}));
