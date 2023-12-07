export const content = {
  user: {
    logOut: 'Log out'
  }
};

export type HotStateContent = typeof content;
export type UserContent = (typeof content.user)[keyof typeof content.user];
