import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { log } from 'app/hooks/useLogger';

export const initlizeFirebase = () => {
  if (process.env.EXPO_PUBLIC_DEV) {
    log.debug('Using Firebase Emulator');
    auth().useEmulator('http://127.0.0.1:9099');

    const db = firestore();
    db.useEmulator('127.0.0.1', 8080);
  }
};
