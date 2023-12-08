import { makeStyles } from '@rneui/themed';

import { textStyle } from 'app/components';

export default makeStyles((theme, props) => ({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingTop: theme.spacing.lg
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: theme.spacing.lg,
    height: 50
  },
  searchBar: {
    borderRadius: 20,
    backgroundColor: theme.colors.grey5,
    height: '80%'
  },
  input: {
    ...textStyle.body(theme)
  },
  cancelButton: {
    color: theme.colors.grey0,
    ...textStyle.callout(theme)
  },
  searchContainer: {
    flex: 1
  }
}));
