import { ActionTypes } from "../constants/actionconstants";
let default_state = {
  college: "",
  auth: false,
  user: null,
  classmates: [],
  socket: null,
  timeline: [],
};

let reducerFunction = (state = default_state, action) => {
  switch (action.type) {
    case ActionTypes.TIMELINE:
      return { ...state, timeline: action.payload };
    case ActionTypes.AUTH:
      return { ...state, auth: action.payload };
    case ActionTypes.SET_SOCKET:
      return { ...state, socket: action.payload };
    case ActionTypes.SET_COLLEGE:
      return { ...state, college: action.payload };
    case ActionTypes.AUTHENTICATED_USER:
      return { ...state, user: action.payload };
    case ActionTypes.CLASSMATES:
      return { ...state, classmates: action.payload };
    default:
      return state;
  }
};

export default reducerFunction;
