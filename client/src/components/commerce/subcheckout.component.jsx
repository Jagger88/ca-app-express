import React from 'react';
// doesn't work yet but don't need to do this one... 
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51I3P56DEAitCh4uVvAikHqjueZ6abrlwD7WW0a49HdKKv8xfUPsvqa4sEny1HGuCio3R97nlRpArk3YJxKiDcLwL000oM9tfYl');

const SubCheckout = () => {
const priceId = 'price_1I4y2LDEAitCh4uV6M6bmxBe';
  const handleClick = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        // Replace with the ID of your price
        {price: {priceId}, quantity: 1}
      ],
      mode: 'subscription',
      successUrl: 'https://example.com/success',
      cancelUrl: 'https://example.com/cancel',
    });
    }   
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    return (
    <button role="link" onClick={handleClick}>
      Subscribe
    </button>
  )
}

export default SubCheckout;
