import { makeStyles } from '@rneui/themed';

export default makeStyles(({ colors, spacing }, props) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.grey4,
    borderRadius: 10,
    padding: spacing.lg,
    alignItems: 'center',
    gap: 5
  },
  icon: {
    width: 34,
    height: 34
  }
}));
