import { makeStyles } from '@rneui/themed';

export default makeStyles((theme, props) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.lg,
    marginTop: theme.spacing.lg
  },
  buttonStyle: {
    backgroundColor: 'transparent'
  }
}));
