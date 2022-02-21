import { createStore } from "redux";
import { taskReducer } from "./todo/todo-reducer";

export const store = createStore(taskReducer, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION());
