import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import * as actions from "../redux/todo/action-creator";

export function ToDoList() {
  const [newTask, setNewTask] = useState({});
  const taskState = useSelector((state) => {
    return state.tasks;
  });
  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(actions.addTask(newTask));
    setNewTask({});
  };

  const handleChange = (ev) => {
    setNewTask({ ...newTask, [ev.target.name]: ev.target.value });
  };

  return (
    <>
      <header>
        <h1> To - Do List </h1>
      </header>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nombre de la tarea" value={newTask.name} onChange={handleChange} />
          <button type="submit">Añadir</button>
        </form>
      </div>
      <div>
        <ul>
          {taskState.map((task, index) => (
            <>
              <li key={index}>{task.name}</li>
              <button
                onClick={() => {
                  dispatch(actions.removeTask(task.name));
                }}
              >
                delete
              </button>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}
