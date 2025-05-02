import { render, screen, fireEvent } from "@testing-library/react";
import EmiCalculator from "./emiCalculator";  

test("renders EMI Calculator text", () => {
  render(<EmiCalculator />); //it says the page we have to render on
  //it is checking whether EMI Calculator abel is present or noe
  expect(screen.getByText(/EMI Calculator/i)).toBeInTheDocument();
});

test("renders all input fields", async()=>{
  render(<EmiCalculator/>)

  //It is checking whether these labels are present or not
  const loanAmount = screen.getByLabelText(/Loan Amount/i);
  const annualInterestRate = screen.getByLabelText(/Annual Interest Rate/i);
  const tenureYears = screen.getByLabelText(/Tenure/i);
  expect(loanAmount).toBeInTheDocument();
  expect(annualInterestRate).toBeInTheDocument();
  expect(tenureYears).toBeInTheDocument();
})
test("allows user to input values and calculates EMI", () => {
  render(<EmiCalculator />);

  const principalInput = screen.getByLabelText(/Loan Amount/i);
  const interestInput = screen.getByLabelText(/Annual Interest Rate/i);
  const tenureInput = screen.getByLabelText(/Tenure/i);
  const calculateButton = screen.getByText(/Calculate EMI/i);

  // Fill inputs
  fireEvent.change(principalInput, { target: { value: "100000" } });
  fireEvent.change(interestInput, { target: { value: "10" } });
  fireEvent.change(tenureInput, { target: { value: "1" } });

  // Click calculate
  fireEvent.click(calculateButton);

  // Expect modal to show EMI result
  expect(screen.getByText(/Result/i)).toBeInTheDocument();
});
test("clears all input fields", async () => {
  render(<EmiCalculator />);     

  const principalInput = screen.getByLabelText(/Loan Amount/i);
  const interestInput = screen.getByLabelText(/Annual Interest Rate/i);
  const tenureInput = screen.getByLabelText(/Tenure/i);
  const clearButton = screen.getByText(/Reset EMI/i); // Assuming there's a reset button

  // Fill in the inputs
  fireEvent.change(principalInput, { target: { value: "100000" } });
  fireEvent.change(interestInput, { target: { value: "10" } });
  fireEvent.change(tenureInput, { target: { value: "1" } });

  // Click clear button
  fireEvent.click(clearButton);

  // After clicking, check that the inputs are cleared
  expect(principalInput).toHaveValue(null); // Check if value is cleared
  expect(interestInput).toHaveValue(null); // Check if value is cleared
  expect(tenureInput).toHaveValue(null); // Check if value is cleared
});




