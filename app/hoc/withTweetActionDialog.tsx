import { Dialog, makeStyles, useTheme } from '@rneui/themed';
import React, { useCallback } from 'react';

import { Text } from 'app/components';
import { useHotStateContext } from 'app/context/hotState/hotState.context';
import { log } from 'app/hooks/useLogger';

type OnDelete = () => void;
export type WithTweetActionDialogProps = {
  openDeleteDialog: (onDelete: OnDelete) => void;
};

export const withTweetActionDialog = (Component: React.FC) => {
  return (props: any) => {
    const {
      content: { dialog: content }
    } = useHotStateContext();
    const styles = useStyles();
    const [showDeleteDialog, setShowDeleteDialog] = React.useState(false);
    const [onDelete, setOnDelete] = React.useState<OnDelete | undefined>();

    const openDeleteDialog = (onDelete: OnDelete) => {
      setOnDelete(onDelete);
      setShowDeleteDialog(true);
    };
    const hideDeleteDialog = () => {
      setShowDeleteDialog(false);
    };

    const deleteTweet = useCallback(() => {
      if (onDelete) {
        log.debug('onDelete');

        onDelete();
      }
    }, [onDelete]);
    const { theme } = useTheme();

    return (
      <>
        <Component {...props} openDeleteDialog={openDeleteDialog} />
        <Dialog
          overlayStyle={{ borderRadius: 10 }}
          isVisible={showDeleteDialog}
          onBackdropPress={hideDeleteDialog}
        >
          <Dialog.Title title={content.delete.title} />
          <Text>{content.delete.message}</Text>
          <Dialog.Button
            titleStyle={{ color: theme.colors.grey0 }}
            buttonStyle={styles.button}
            title={content.delete.no}
            onPress={hideDeleteDialog}
          />
          <Dialog.Button
            titleStyle={{ color: theme.colors.white }}
            buttonStyle={{
              ...styles.button,
              backgroundColor: theme.colors.error
            }}
            title={content.delete.yes}
            onPress={() => {
              hideDeleteDialog();
              deleteTweet();
            }}
          />
        </Dialog>
      </>
    );
  };
};

const useStyles = makeStyles((theme, props) => ({
  button: {
    backgroundColor: 'transparent'
  }
}));
