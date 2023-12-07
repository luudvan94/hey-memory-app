import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';

import { FirebaseAuthService } from 'app/context/auth/auth.service';
import User from 'app/models/user';

//TODO: Remove this line when you're ready to use Firebase
auth().useEmulator('http://127.0.0.1:9099');

const useFirebaseAuth = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const service = new FirebaseAuthService();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      setUser(user);

      if (initializing) setInitializing(false);
    });
    return subscriber; // unsubscribe on unmount
  }, [initializing, user]);

  return { user, initializing, service };
};

export { useFirebaseAuth };
