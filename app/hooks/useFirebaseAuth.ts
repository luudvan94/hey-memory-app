import { User } from '@luudvan94/hey-memory-shared-models';
import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';

import { FirebaseAuthService } from 'app/context/auth/auth.service';

const useFirebaseAuth = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | undefined>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const service = new FirebaseAuthService();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      // eslint-disable-next-line no-console
      console.log('onAuthStateChanged', user);
      if (user) {
        const profile = { displayName: user.displayName };
        setUser({ uid: user.uid, profile });
      }
      setIsLoggedIn(!!user);

      if (initializing) setInitializing(false);
    });
    return subscriber; // unsubscribe on unmount
  }, [initializing]);

  return { user, initializing, service, isLoggedIn };
};

export { useFirebaseAuth };
