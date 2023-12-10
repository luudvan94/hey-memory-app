import { makeStyles } from '@rneui/themed';

export default makeStyles((theme, props) => ({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: theme.spacing.xl,
    paddingLeft: theme.spacing.xl
  },
  button: {
    alignSelf: 'flex-start',
    borderRadius: 5
  }
}));
