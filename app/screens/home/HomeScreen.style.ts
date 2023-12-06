import { StyleSheet } from 'react-native';

import { Theme } from 'app/styles/theme';

export const defaultStyle = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      height: '100%'
    },
    header: {
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 20,
      paddingBottom: 10
    },
    topBarContainer: {
      paddingHorizontal: 10,
      width: '100%',
      height: 50,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    trailingBarButtonContainer: {
      flexDirection: 'row'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    eventsList: {
      backgroundColor: 'grey',
      width: '100%',
      height: '100%',
      paddingHorizontal: 10
    },
    event: {
      width: '100%',
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginVertical: 10,
      borderRadius: 5,
      backgroundColor: '#fff'
    },
    eventContent: {
      fontSize: 18,
      marginBottom: 10
    },
    eventDate: {
      fontSize: 14,
      color: '#999'
    }
  });
};
