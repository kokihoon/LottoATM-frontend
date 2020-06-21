import Api from "./index";
import { IAuthLogin, IAuthSignUp } from "../model/user";

export const postLogin = async (payload: IAuthLogin) => {
  return await Api.post("/signin", payload);
};

export const postSignUp = async (payload: IAuthSignUp) => {
  return await Api.post("/signup", payload);
};
