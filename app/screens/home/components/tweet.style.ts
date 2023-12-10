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
    gap: spacing.xl
  },
  footer: {
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
    display: 'flex',
    backgroundColor: 'transparent'
  }
}));
