import { makeStyles } from '@rneui/themed';

export default makeStyles(({ colors, spacing }, props) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    gap: 0,
    paddingTop: spacing.md
  },
  content: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    gap: spacing.xl,
    paddingHorizontal: spacing.md
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md
  },
  divider: {
    width: 3,
    height: '100%',
    backgroundColor: colors.grey4,
    borderRadius: 3
  },
  footer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  dateTime: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  border: {
    width: '100%',
    height: 1
  },
  button: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    marginHorizontal: 0
  }
}));
