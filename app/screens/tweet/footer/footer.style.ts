import { makeStyles } from '@rneui/themed';

import { textStyle } from 'app/components';

export default makeStyles((theme, props) => ({
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
  },
  postButton: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.primary,
    borderRadius: 40,
    alignSelf: 'flex-end'
  }
}));
