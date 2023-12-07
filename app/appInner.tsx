import { useAuthProvider } from 'app/context/auth/auth.context';

import { ColdStateProvider } from './context/coldState/coldState.provider';
import { HotStateProvider } from './context/hotState/hotState.provider';

const AppInner = () => {
  const { loggedIn } = useAuthProvider();
  return loggedIn ? <HotStateProvider /> : <ColdStateProvider />;
};

export default AppInner;
