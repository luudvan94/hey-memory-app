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
  const loginWithGoogle = () => {};

  const loginOptions: Options[] = [
    {
      icon: ICONS.USERNAME_PASSWORD,
      label: content.usernamePassword,
      handler: loginWithGoogle
    },
    { icon: ICONS.APPLE, label: content.apple, handler: loginWithGoogle },
    { icon: ICONS.GOOGLE, label: content.google, handler: loginWithGoogle }
  ];
  return {
    loginOptions
  };
};
