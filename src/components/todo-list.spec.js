import React from "react";
import * as api from "../services/api";

import { render, fireEvent, screen } from "../utils/test-utils";
import { ToDoList } from "./todo-list";

export const handlers = [
  api.getAll("/api/tasks", (req, res, ctx) => {
    return res(ctx.json("Pedro"), ctx.delay(150));
  }),
];

test("testing component", async () => {
  render(<ToDoList />);

  // after clicking the 'Fetch user' button, it should now show that it is fetching the user
  fireEvent.click(screen.getByRole("button", { name: /Pedro/i }));
  expect(screen.getByText(/Lista de tareas/i)).toBeInTheDocument();

  // after some time, the user should be received
  expect(await screen.findByText(/Pedro/i)).toBeInTheDocument();
});
