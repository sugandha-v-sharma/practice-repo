import { render, screen, fireEvent } from "@testing-library/react";
import Users from "./users";

beforeEach(() => {
  jest.spyOn(window, "alert").mockImplementation(() => {});
});
beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          users: [
            {
              id: 1,
              firstName: "John",
              lastName: "Doe",
              gender: "male",
              age: 30,
              email: "john@example.com",
            },
            {
              id: 2,
              firstName: "Jane",
              lastName: "Smith",
              gender: "female",
              age: 25,
              email: "jane@example.com",
            },
          ],
        }),
    })
  ) as jest.Mock;
});
test("buttons and inputs are present in the document", async () => {
  render(<Users />);
  const searchButton = await screen.findByRole("button", { name: /search/i }); //at first the state is in loading so buttonas are not visible at first so we are using await to wait till the loading gets false
  const resetButton = await screen.findByRole("button", { name: /reset/i });
  const input = await screen.findByRole("textbox", { name: /searchBox/i });
  expect(searchButton).toBeInTheDocument();
  expect(resetButton).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});
test("user can type in search input", async () => {
  render(<Users />);
  const input = await screen.findByRole("textbox", { name: /searchBox/i });
  fireEvent.change(input, { target: { value: "john" } });
  expect((input as HTMLInputElement).value).toBe("john");
});
test("reset button shows full user list again", async () => {
  render(<Users />);
  const input = await screen.findByRole("textbox", { name: /searchBox/i });
  const searchButton = await screen.findByRole("button", { name: /search/i });
  const resetButton = await screen.findByRole("button", { name: /reset/i });

  fireEvent.change(input, { target: { value: "Jane" } });
  fireEvent.click(searchButton);

  // Ensure Jane is present
  expect(await screen.findByText("Jane")).toBeInTheDocument();

  // Ensure John is not present
  expect(screen.queryByText("John")).not.toBeInTheDocument();

  fireEvent.click(resetButton);

  expect(await screen.findByText("John")).toBeInTheDocument();
});
