import { makeStyles } from '@rneui/themed';

import { textStyle } from 'app/components';

export default makeStyles((theme, props) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyle: {
    backgroundColor: 'transparent'
  },
  time: {
    color: theme.colors.grey1,
    ...textStyle.title2(theme)
  }
}));
