import { ActionTypes } from "../constants/actionconstants";

export const setUser = (user) => ({
  type: ActionTypes.AUTHENTICATED_USER,
  payload: user,
});
export const setClassmates = (classmates) => ({
  type: ActionTypes.CLASSMATES,
  payload: classmates,
});
export const setAuth = (auth) => ({
  type: ActionTypes.AUTH,
  payload: auth,
});
export const setCollege = (college) => ({
  type: ActionTypes.SET_COLLEGE,
  payload: college,
});
export const setSocket = (socket) => ({
  type: ActionTypes.SET_SOCKET,
  payload: socket,
});
export const setTimeline = (timeline) => ({
  type: ActionTypes.TIMELINE,
  payload: timeline,
});
