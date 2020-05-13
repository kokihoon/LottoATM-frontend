export interface IAuthUser {
  error: string;
  isLoggedIn: boolean;
  userInfo: {
    user_id?: number;
    email: string;
    nickname: string;
  };
}

export interface IAuthLogin {
  authStatus?: string;
  email?: string;
  username: string;
  password?: string;
  error?: string;
}
