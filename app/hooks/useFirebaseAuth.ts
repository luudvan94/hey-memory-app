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
      if (user) {
        setUser(user);
      }
      setIsLoggedIn(!!user);

      if (initializing) setInitializing(false);
    });
    return subscriber; // unsubscribe on unmount
  }, [initializing, user]);

  return { user, initializing, service, isLoggedIn };
};

export { useFirebaseAuth };
