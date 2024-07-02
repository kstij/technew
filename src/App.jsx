// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsletterSubscriptionForm from "./components/NewsletterSubscriptionForm";
import HeaderSection from "./components/HeaderSection";
import OpportunityPage from "./components/OpportunityPage"
import RepresentUsSection from "./components/1representus/RepresentUsSection"; // Import the new section
import Weare from "./components/2WhatAreWe/weare";
import Community from "./components/3Community/community";
import Endnope from "./components/4endnope/endnope";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="font-cabinG">
        <HeaderSection />
        <RepresentUsSection />
        <Weare />
        <Community />
        <Endnope />
        <OpportunityPage />
      </main>
      <NewsletterSubscriptionForm />
      <Footer />
    </>
  );
};

export default App;
