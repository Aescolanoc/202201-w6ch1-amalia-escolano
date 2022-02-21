import { actionTypes } from "./action-types";

export const addTask = (payload) => ({
  type: actionTypes.add,
  payload,
});

export const removeTask = (payload) => ({
  type: actionTypes.remove,
  payload,
});
