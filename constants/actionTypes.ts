export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

interface createRequestTypes {
  [key: string]: string;
}

function createRequestTypes(base: string): createRequestTypes {
  return [REQUEST, SUCCESS, FAILURE].reduce(
    (acc: createRequestTypes, type: string) => {
      acc[type] = `${base}_${type}`;
      return acc;
    },
    {}
  );
}

// Auth
export const POST_LOGIN = createRequestTypes("POST_LOGIN");
export const POST_LOGOUT = "POST_LOGOUT";
export const SET_LOGGED_INFO = "SET_LOGGED_INFO";
export const POST_SIGNUP = createRequestTypes("POST_SIGNUP");
