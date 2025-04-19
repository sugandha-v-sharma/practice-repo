import React from "react";

interface ModalProps {
  emi: string | null;
  totalPayment: string | null;
  totalInterest: string | null;
} 

function Modal({ emi, totalPayment, totalInterest }: ModalProps) {
  return (
    <div className="text-center mt-4">
      <hr/>
      <div className="uppercase font-bold text-lg p-4">Result</div>
      <div className="flex p-4">
        <div className="w-1/2 text-right">Monthly EMI:</div>
        <div className="w-1/6 text-left ml-2">₹{emi}</div>
      </div>
      <div className="flex text-center p-4">
        <div className="w-1/2 text-right">Total Payment:</div>
        <div className="w-1/6 text-left ml-2">₹{totalPayment}</div>
      </div>
      <div className="flex text-center p-4">
        <div className="w-1/2 text-right">Total Interest:</div>
        <div className="w-1/6 text-left ml-2">₹{totalInterest}</div>
      </div>
    </div>
  );
}

export default Modal;
