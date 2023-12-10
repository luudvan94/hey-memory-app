import { Button, Divider, makeStyles, useTheme } from '@rneui/themed';
import { Modal, View } from 'react-native';

interface ActionModalProps {
  isVisible: boolean;
}
export const ActionModal: React.FC<ActionModalProps> = ({ isVisible }) => {
  const styles = useStyles();
  const { theme } = useTheme();
  return (
    <Modal visible={isVisible} transparent>
      <View style={styles.container}>
        <Button
          buttonStyle={styles.button}
          title={'Delete'}
          titleStyle={styles.delete}
        />
        <Divider color={theme.colors.grey4} />
        <Button buttonStyle={styles.button} title={'Cancel'} />
      </View>
    </Modal>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    height: '20%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'yellow',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: 'transparent'
  },
  delete: {
    color: theme.colors.error
  },
  divider: {
    height: 1
  }
}));
