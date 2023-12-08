import { makeStyles } from '@rneui/themed';

export default makeStyles(({ colors, spacing }, props) => ({
  container: {
    backgroundColor: colors.background,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md
  },
  options: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    gap: spacing.lg
  }
}));
