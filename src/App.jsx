// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsletterSubscriptionForm from "./components/NewsletterSubscriptionForm";
import HeaderSection from "./components/HeaderSection";
import OpportunityPage from "./components/OpportunityPage"
import RepresentUsSection from "./components/representus/RepresentUsSection"; // Import the new section
import Weare from "./components/WhatAreWe/weare";
import Community from "./components/Community/community";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="font-cabinG">
        <HeaderSection />
        <RepresentUsSection />
        <Weare />
        <Community />
        <OpportunityPage />
      </main>
      <NewsletterSubscriptionForm />
      <Footer />
    </>
  );
};

export default App;
