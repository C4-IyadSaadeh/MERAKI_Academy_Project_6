// initialState
const initialState = {
  token: "" || localStorage.getItem("token"),
  isLoggedIn: localStorage.getItem("token") ? true : false,
  userId: "" || localStorage.getItem("userId"),
  roleId: "",
  plan: "",
};

// Reducer
const loginsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOG_IN":
      localStorage.setItem("token", payload.token);
      localStorage.setItem("roleId", payload.roleId);
      localStorage.setItem("userId", payload.userId);

      return {
        token: payload.token,
        isLoggedIn: true,
        userId: payload.id,
        roleId: payload.role,
        plan: payload.plan,
      };
    case "LOG_OUT":
      localStorage.clear();
      return {
        token: "",
        isLoggedIn: payload,
        userId: "",
        roleId: "",
      };
    default:
      return state;
  }
};
export default loginsReducer;
// Actions
export const login = (result) => {
  return { type: "LOG_IN", payload: result };
};

export const logout = () => {
  return { type: "LOG_OUT", payload: false };
};
