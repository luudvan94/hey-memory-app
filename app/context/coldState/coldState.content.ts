export const content = {
  login: {
    google: 'Login with Google',
    apple: 'Login with Apple',
    usernamePassword: 'Login with Username and Password',
    description: 'Manage your tweets and more',
    title: 'Log in to Hey Memory'
  }
};

export type ColdStateContent = typeof content;
export type LoginContent = (typeof content.login)[keyof typeof content.login];
