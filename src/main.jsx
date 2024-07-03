import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

const App = lazy(() => import("./App.jsx"));
const About = lazy(() => import("./about/About.jsx"));
const CardDetail = lazy(() => import("./components/Card/CardDetail.jsx"));
const NotFound = lazy(() => import("./components/404/NotFound.jsx"));
const Legal = lazy(() => import("./legal/Legal.jsx"));
const SubscriptionForm = lazy(() => import("./components/NewsletterSubscriptionForm.jsx"));
const RepresentUsSection = lazy(() => import("./components/1representus/RepresentUsSection.jsx"));
const Weare = lazy(() => import("./components/2WhatAreWe/weare.jsx"));
const Community = lazy(() => import("./components/3Community/community.jsx"));
const endnope = lazy(() => import("./components/4endnope/endnope.jsx"));
const OpportunityPage = lazy(() => import("./components/OpportunityPage.jsx"));

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/legalinfo" element={<Legal />} />
          <Route path="/programs/:cardSlug" element={<CardDetail />} />
          <Route path="/subscribe" element={<SubscriptionForm />} />
          <Route path="/subscription-success" element={<div>Subscription successful!</div>} />
          <Route path="/opportunity" element={<OpportunityPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>
);
