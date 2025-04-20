import { render, screen, fireEvent } from "@testing-library/react";
import ToDoList from "./toDoList";
import ToDoListModal from "../../components/todoListModal";

test("checking wether all the buttons are present in the modal", async () => {
  render(<ToDoList />);
  const addItemBtn = screen.getByText(/add a task/i);
  expect(addItemBtn).toBeInTheDocument();
  const removeItemBtns = await screen.findAllByRole("button", {
    name: /remove/i,
  });
  expect(removeItemBtns.length).toBeGreaterThan(0); //bcoz there were many remove buttons while mapping
});
test("opens add task modal on button click", () => {
    render(<ToDoList />);
    fireEvent.click(screen.getByText(/add a task/i)); // button inside ToDoList
    expect(screen.getByText(/add a new task/i)).toBeInTheDocument(); // content inside modal
  });
  
