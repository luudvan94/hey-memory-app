import { makeStyles } from '@rneui/themed';

import { textStyle } from 'app/components';

export default makeStyles((theme, props) => ({
  container: {
    display: 'flex',
    paddingLeft: theme.spacing.md
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing.lg
  },
  clearButton: {
    backgroundColor: 'transparent'
  },
  clearTitle: {
    color: theme.colors.grey0,
    ...textStyle.bold(theme),
    ...textStyle.callout(theme)
  },
  listContainer: {}
}));
