import React from "react";
import Navbar from "./Navbar"; // Adjust path if necessary
import Footer from "./Footer";
import OpportunitySection from "./OpportunitySection"; // Adjust path if necessary

const OpportunityPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-28 px-5 sm:px-10 lg:px-16 py-8"> {/* Adjust mt-24 to create more space */}
        <OpportunitySection />
      </div>
      <Footer />
    </>
  );
};

export default OpportunityPage;
