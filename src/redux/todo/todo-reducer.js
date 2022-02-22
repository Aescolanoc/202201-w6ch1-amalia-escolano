import { actionTypes } from "./action-types";

const initialState = {
  tasks: [],
};

export function taskReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.load:
      return { ...state, tasks: action.payload };
    case actionTypes.add:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case actionTypes.remove:
      return { ...state, tasks: state.tasks.filter((item) => item.id !== action.payload.id) };
    case actionTypes.update:
      return { ...state, tasks: state.tasks.map((item) => (item.id === action.payload.id ? action.payload : item)) };
    default:
      return state;
  }
}
