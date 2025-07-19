import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import Task from "../components/Task";
import { v4 as uuid } from "uuid";

const testTask = {
  id: uuid(),
  text: "Test Task Text!",
  category: "Test Category!",
};

describe("Task component rendering", () => {
  test("displays the task text", () => {
    render(<Task task={testTask} onDeleteTask={() => {}} />);
    expect(screen.queryByText(testTask.text)).toBeInTheDocument();
  });

  test("displays the task category", () => {
    render(<Task task={testTask} onDeleteTask={() => {}} />);
    expect(screen.queryByText(testTask.category)).toBeInTheDocument();
  });
});

describe("Task component deletion functionality", () => {
  test("is removed from the list when the delete button is clicked", () => {
    render(<App />);

    const taskElement = screen.queryByText(/Buy rice/);
    expect(taskElement).toBeInTheDocument();

    const deleteButton = taskElement.parentElement.querySelector("button.delete");
    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(deleteButton);

    expect(screen.queryByText(/Buy rice/)).not.toBeInTheDocument();
  });
});