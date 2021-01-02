import React from "react";

import { useStripe } from "@stripe/react-stripe-js";
  
const Checkout = () => {
    const stripe = useStripe();
  
    const StripeCheckout = () => (
        stripe.redirectToCheckout({
        lineItems: [
          // Replace with the ID of your price
          // should come to $100
          {price: 'price_1I4y2LDEAitCh4uV6M6bmxBe', quantity: 1},
        ],
      mode: 'subscription', // use this mode for subscription products
    //   mode: 'payment', // use this for one-time payment objects
        successUrl: 'http://localhost/success', // need to update with success page
        cancelUrl: 'http://localhost/cancelled', // need to update with cancelled page
      })
      .then(function(result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      })
    );
  
    return (
            <button onClick={StripeCheckout}>
                Checkout
            </button>
    );
  };
  
  export default Checkout;