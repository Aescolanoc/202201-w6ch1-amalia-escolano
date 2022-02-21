import { actionTypes } from "./action-types";

const initialState = { tasks: [{ name: "dormir" }, { name: "comer" }] };

export function taskReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.add:
      return { tasks: [...state.tasks, action] };
    case actionTypes.remove:
      return state.tasks.filter((item) => item.name !== action);
    default:
      return state;
  }
}
