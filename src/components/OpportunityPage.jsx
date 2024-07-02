// OpportunityPage.jsx
import React from "react";
import OpportunitySection from "./OpportunitySection"; // Ensure this path is correct

const OpportunityPage = () => {
  return (
    <div>
      <div className="border-b-2 border-dim-gray border-opacity-30 pb-6 ml-6 mr-6 lg:ml-10 lg:mr-10 mt-8 mb-10"></div>
      {/* Add mb-4 for margin bottom */}
      
      <OpportunitySection />

      <div className="border-b-2 border-dim-gray border-opacity-30 pb-6 ml-6 mr-6 lg:ml-10 lg:mr-10 mt-8 mb-10"></div>
    </div>
  );
};

export default OpportunityPage;
