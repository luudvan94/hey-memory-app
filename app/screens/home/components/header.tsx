import { Button, useTheme } from '@rneui/themed';
import { View } from 'react-native';

import useStyles from './header.style';

interface HeaderProps {
  selectedDate: Date;
  updateSelectedDate: (date: Date) => void;
}
const Header: React.FC<HeaderProps> = ({
  selectedDate,
  updateSelectedDate
}) => {
  const styles = useStyles();
  const {
    theme: { colors }
  } = useTheme();
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          const newDate = new Date(selectedDate);
          newDate.setDate(newDate.getDate() - 1);
          updateSelectedDate(newDate);
        }}
        buttonStyle={styles.buttonStyle}
        icon={{
          name: 'arrow-left',
          size: 30,
          type: 'ionicons',
          color: colors.black
        }}
      />
      <Button
        title={selectedDate.toDateString()}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.time}
      />
      <Button
        onPress={() => {
          const newDate = new Date(selectedDate);
          newDate.setDate(newDate.getDate() + 1);
          updateSelectedDate(newDate);
        }}
        buttonStyle={styles.buttonStyle}
        icon={{
          name: 'arrow-right',
          size: 30,
          type: 'ionicons',
          color: colors.black
        }}
      />
    </View>
  );
};

export default Header;
