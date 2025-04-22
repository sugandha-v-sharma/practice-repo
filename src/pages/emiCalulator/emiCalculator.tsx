import React, { useState } from "react";
import EMIResult from "./emiResult";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input"


function EmiCalculator() {
  const [principal, setPrincipal] = useState<string>("");
  const [annualRate, setAnnualRate] = useState<string>("");
  const [tenureYears, setTenureYears] = useState<string>("");
  const [emi, setEmi] = useState<string | null>(null);
  const [totalPayment, setTotalPayment] = useState<string | null>(null);
  const [totalInterest, setTotalInterest] = useState<string | null>(null);
  const [isOpenEmiResultComponent, setIsModalEmiResultComponent] =
    useState<boolean>(false);

  const calculateEMI = (): void => {
    const principalLoanAmount: number = parseFloat(principal);
    const annualInterest: number = parseFloat(annualRate);
    const tenure: number = parseFloat(tenureYears);

    if (isNaN(principalLoanAmount) || isNaN(annualInterest) || isNaN(tenure)) {
      setIsModalEmiResultComponent(false);
      alert("Please enter valid numbers for all fields.");
      return;
    } else {
      setIsModalEmiResultComponent(true);
      const monthlyInterestRate: number = annualInterest / 12 / 100;
      const loanTenureInMonths: number = tenure * 12;

      const totalEmi: number =
        (principalLoanAmount *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, loanTenureInMonths)) /
        (Math.pow(1 + monthlyInterestRate, loanTenureInMonths) - 1);
      const totalPayment: number = totalEmi * loanTenureInMonths;
      const interest: number = totalPayment - principalLoanAmount;

      setEmi(totalEmi.toFixed(2));
      setTotalPayment(totalPayment.toFixed(2));
      setTotalInterest(interest.toFixed(2));
    }
  };

  const resetEMI = (): void => {
    setIsModalEmiResultComponent(false);
    setPrincipal("");
    setAnnualRate("");
    setTenureYears("");
  };

  return (
    <div className="w-full bg-grey-500 text-center">
      <h2 className=" font-bold text-lg p-4">EMI Calculator</h2>
      <div className="p-4 flex">
        <label className="w-1/2 text-right pr-4" htmlFor="loanAmount">
          Loan Amount (₹):
        </label>
        <Input
          aria-label="loanAmount"
          id="loanAmount"
          // className="w-1/6 border p-1"
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div className="p-4 flex">
        <label className="w-1/2 text-right pr-4" htmlFor="annualInterestRate">
          Annual Interest Rate (%):{" "}
        </label>
        <Input
          aria-label="annualInterestRate"
          id="annualInterestRate"
          // className="w-1/6 border p-1"
          type="number"
          value={annualRate}
          onChange={(e) => setAnnualRate(e.target.value)}
        />
      </div>
      <div className="p-4 flex">
        <label className="w-1/2 text-right pr-4" htmlFor="tenureYears">
          Tenure (Years):{" "}
        </label>
        <Input
          aria-label="tenureYears"
          id="tenureYears"
          // className="w-1/6 border p-1"
          type="number"
          value={tenureYears}
          onChange={(e) => setTenureYears(e.target.value)}
        />
      </div>
      <div>
        <Button
          shape="rounded"
          variant="hover"
          onClick={calculateEMI}
        >
          Calculate EMI
        </Button>
        &nbsp;&nbsp;
        <Button shape="rounded" variant="hover" onClick={resetEMI}>
          Reset EMI
        </Button>
      </div>
      {isOpenEmiResultComponent && (
        <EMIResult
          emi={emi}
          totalPayment={totalPayment}
          totalInterest={totalInterest}
        />
      )}
    </div>
  );
}

export default EmiCalculator;
