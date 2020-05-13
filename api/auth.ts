import Api from "./index";
import { IAuthLogin } from "../model/user";

export const postLogin = async (payload: IAuthLogin) => {
  return await Api.post("/signin", payload);
};
