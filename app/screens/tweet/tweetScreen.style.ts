import { makeStyles } from '@rneui/themed';

import { textStyle } from 'app/components';

export default makeStyles((theme, props) => ({
  container: {
    flex: 1,
    marginHorizontal: theme.spacing.lg,
    marginTop: theme.spacing.xl,
    justifyContent: 'space-between'
  },
  textInput: {
    ...textStyle.body(theme)
  },
  postButton: {
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.lg,
    backgroundColor: theme.colors.primary,
    borderRadius: 40,
    alignSelf: 'flex-end'
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  tools: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonStyle: {
    backgroundColor: 'transparent'
  },
  post: {
    ...textStyle.body(theme)
  }
}));
