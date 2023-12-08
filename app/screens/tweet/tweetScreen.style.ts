import { makeStyles } from '@rneui/themed';

import { textStyle } from 'app/components';

export default makeStyles((theme, props) => ({
  container: {
    flex: 1,
    margin: theme.spacing.lg,
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
  post: {
    color: theme.colors.background
  }
}));
