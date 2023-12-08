import { makeStyles } from '@rneui/themed';

export default makeStyles(({ colors, spacing }, props) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    gap: 0,
    paddingTop: spacing.xl,
    paddingBottom: spacing.md,
    paddingLeft: spacing.xl
  },
  content: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    gap: spacing.xl,
    paddingRight: spacing.md
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  image: {
    flex: 1,
    height: 200,
    borderRadius: 10
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: spacing.lg
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: spacing.md
  },
  dateTime: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg
  },
  action: {
    backgroundColor: 'red'
  },
  border: {
    width: '100%',
    height: 1,
    backgroundColor: colors.grey5
  }
}));
