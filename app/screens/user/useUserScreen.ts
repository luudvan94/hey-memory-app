import { useCallback } from 'react';

import { useAuthProvider } from 'app/context/auth/auth.context';

const useUserScreen = () => {
  const { service } = useAuthProvider();

  const logout = useCallback(() => {
    service.logout();
  }, [service]);

  return { logout };
};

export { useUserScreen };
