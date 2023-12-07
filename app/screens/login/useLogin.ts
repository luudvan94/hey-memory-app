import { useAuthProvider } from 'app/context/auth/auth.context';
import { LoginContent } from 'app/context/coldState/coldState.content';
import { useColdStateContext } from 'app/context/coldState/coldState.context';
import { ICONS, Icon } from 'app/utils/icons';

interface Options {
  icon: Icon;
  label: LoginContent;
  handler: () => void;
}

export const useLogin = () => {
  const {
    content: { login: content }
  } = useColdStateContext();
  const { service } = useAuthProvider();

  const handler = () => {
    service.loginWithGoogle();
  };

  const loginOptions: Options[] = [
    { icon: ICONS.APPLE, label: content.apple, handler },
    { icon: ICONS.GOOGLE, label: content.google, handler }
  ];

  return {
    loginOptions
  };
};
