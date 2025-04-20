import React, { useState } from "react";
import Modal from "../../components/modal";

function EmiCalculator() {
  const [principal, setPrincipal] = useState<string>("");
  const [annualRate, setAnnualRate] = useState<string>("");
  const [tenureYears, setTenureYears] = useState<string>("");
  const [emi, setEmi] = useState<string | null>(null);
  const [totalPayment, setTotalPayment] = useState<string | null>(null);
  const [totalInterest, setTotalInterest] = useState<string | null>(null);
  const [isOpenEmiResultModal, setIsModalEmiResultModal] =
    useState<boolean>(false);

  const calculateEMI = (): void => {
    const principalLoanAmount: number = parseFloat(principal);
    const annualInterest: number = parseFloat(annualRate);
    const tenure: number = parseFloat(tenureYears);

    if (isNaN(principalLoanAmount) || isNaN(annualInterest) || isNaN(tenure)) {
      setIsModalEmiResultModal(false);
      alert("Please enter valid numbers for all fields.");
      return;
    } else {
      setIsModalEmiResultModal(true);
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
    setIsModalEmiResultModal(false);
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
        <input
          aria-label="loanAmount"
          id="loanAmount"
          className="w-1/6 border"
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div className="p-4 flex">
        <label className="w-1/2 text-right pr-4" htmlFor="annualInterestRate">
          Annual Interest Rate (%):{" "}
        </label>
        <input
        aria-label="annualInterestRate"
          id="annualInterestRate"
          className="w-1/6 border"
          type="number"
          value={annualRate}
          onChange={(e) => setAnnualRate(e.target.value)}
        />
      </div>
      <div className="p-4 flex">
        <label className="w-1/2 text-right pr-4" htmlFor="tenureYears">
          Tenure (Years):{" "}
        </label>
        <input
        aria-label="tenureYears"
          id="tenureYears"
          className="w-1/6 border"
          type="number"
          value={tenureYears}
          onChange={(e) => setTenureYears(e.target.value)}
        />
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-900 p-2 rounded text-white mt-4"
          onClick={calculateEMI}
        >
          Calculate EMI
        </button>
        &nbsp;&nbsp;
        <button
          className="bg-blue-500 hover:bg-blue-900 p-2 rounded text-white mt-4"
          onClick={resetEMI}
        >
          Reset EMI
        </button>
      </div>
      {isOpenEmiResultModal && (
        <Modal
          emi={emi}
          totalPayment={totalPayment}
          totalInterest={totalInterest}
        />
      )}
    </div>
  );
}

export default EmiCalculator;
