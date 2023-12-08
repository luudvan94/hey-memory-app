import { makeStyles } from '@rneui/themed';

import { textStyle } from 'app/components';

export default makeStyles((theme, props) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.grey4
  },
  cancel: {
    backgroundColor: 'transparent',
    color: theme.colors.grey2,
    ...textStyle.body(theme)
  },
  cancelContainer: {
    backgroundColor: 'transparent'
  }
}));
