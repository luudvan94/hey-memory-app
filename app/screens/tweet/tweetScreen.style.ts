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
  parentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
    gap: theme.spacing.xl
  },
  divider: {
    width: 3,
    height: '100%',
    backgroundColor: theme.colors.grey4,
    borderRadius: 3
  },
  parentTweet: {
    flex: 1
  },
  assetContainer: {
    marginVertical: theme.spacing.md
  }
}));
