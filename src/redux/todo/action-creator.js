import { actionTypes } from "./action-types";

export const loadTask = (payload) => ({
  type: actionTypes.add,
  payload,
});

//Payload can be whatever you want
// export const loadTask = (tasks) => ({
//   type: actionTypes.add,
//   payload: tasks,
// });

export const addTask = (payload) => ({
  type: actionTypes.add,
  payload,
});

export const removeTask = (payload) => ({
  type: actionTypes.remove,
  payload,
});

export const updateTask = (payload) => ({
  type: actionTypes.update,
  payload,
});
