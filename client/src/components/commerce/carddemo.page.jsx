import React from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter } from "react-router-dom";

import ElementDemos from "./democomponents/ElementsDemos";
import CardForm from "./democomponents/CardForm";
import SplitForm from "./democomponents/SplitForm";

import "./carddemo.styles.scss";

const stripePromise = loadStripe("pk_test_51I3P56DEAitCh4uVvAikHqjueZ6abrlwD7WW0a49HdKKv8xfUPsvqa4sEny1HGuCio3R97nlRpArk3YJxKiDcLwL000oM9tfYl");

const demos = [
  {
    path: "/card-element",
    label: "CardElement",
    component: CardForm
  },
  {
    path: "/split-card-elements",
    label: "Split Card Elements",
    component: SplitForm
  }
];

const CardDemo = () => {
  return (
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <ElementDemos demos={demos} />
      </Elements>
    </BrowserRouter>
  );
};

export default CardDemo;
