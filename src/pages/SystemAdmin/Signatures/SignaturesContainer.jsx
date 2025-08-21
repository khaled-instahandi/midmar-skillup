import React from "react";
import PurchaseRequests from "./PurchaseRequests/PurchaseRequests";
import EmploymentRequests from "./EmploymentRequests/EmploymentRequests";

function SignaturesContainer() {
  return (
    <>
      <PurchaseRequests />
      {/* You can add more components here as needed */}
      <EmploymentRequests />
    </>
  );
}

export default SignaturesContainer;
