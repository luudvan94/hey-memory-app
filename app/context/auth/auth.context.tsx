import React, { useMemo } from 'react';

import { Text } from 'app/components';
import { useFirebaseAuth } from 'app/hooks/useFirebaseAuth';
import User from 'app/models/user';

import { AuthService } from './auth.service';

type AuthContextValue = {
  loggedIn: boolean;
  service: AuthService;
  user: User | null;
};

const AuthContext = React.createContext<AuthContextValue | undefined>(
  undefined
);

const AuthProvider = ({ children }) => {
  const { user, initializing, service } = useFirebaseAuth();

  const value: AuthContextValue = useMemo(() => {
    return {
      loggedIn: !!user,
      service,
      user
    };
  }, [service, user]);

  if (initializing) {
    //TODO: Add a loading screen
    //TODO: React.Suspense
    return <Text>...Loading</Text>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthProvider = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthProvider must be used within a AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuthProvider };
