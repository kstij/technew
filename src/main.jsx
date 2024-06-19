// main.jsx

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

import ReactGA from "react-ga4";

ReactGA.initialize(process.env.GOOGLE_ID);
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

const root = ReactDOM.createRoot(document.getElementById("root"));

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>
);
