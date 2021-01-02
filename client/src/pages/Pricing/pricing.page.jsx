import React from 'react';
import './pricing.styles.scss'
import hero from  '../../assets/workspace.png';
import PriceCards from '../../components/card-list/pricecards.component';
import Checkout from '../../components/commerce/checkout.component';
import SubCheckout from '../../components/commerce/subcheckout.component';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51I3P56DEAitCh4uVvAikHqjueZ6abrlwD7WW0a49HdKKv8xfUPsvqa4sEny1HGuCio3R97nlRpArk3YJxKiDcLwL000oM9tfYl");
 

const selectPlans = [{
    name: 'Standard',
    id: 'std1',
    price: 100,
    unit: '/month',
    currency: 'USD',
    buttontext: 'Get Standard',
    imageURL: '../../assets/workspace.png',
    description:'The <img> tag is used to embed an image in an HTML page. Images are not technically inserted into a web page; images are linked to web pages. The <img> tag creates a holding space for the referenced image.',
    features: '<ul><li><a href="/features/automations/customer-journey-builder/">Customer Journey Builder</a></li><li>Multiple starting and branching points</li><li>Pre-built journeys</li><li><a href="/features/templates/">Custom-coded templates</a></li></ul>'
  },
  {
    name: 'Premium',
    id: 'prem1',
    price: 200,
    unit: 'USD/month',
    currency: 'USD',
    buttontext: 'Get Premium',
    imageURL: '../../assets/workspace.png',
    description:'The <img> tag is used to embed an image in an HTML page. Images are not technically inserted into a web page; images are linked to web pages. The <img> tag creates a holding space for the referenced image.',
    features: '<ul><li><a href="/features/automations/customer-journey-builder/">Customer Journey Builder</a></li><li>Multiple starting and branching points</li><li>Pre-built journeys</li><li><a href="/features/templates/">Custom-coded templates</a></li></ul>'
  }];

const PricingPage = () => (
    <>
    <div className='pricingpage'>
        {/* <div className='hero'>
            <img src={hero} alt="heroimage" />
        </div> */}
        <h1>Pricing</h1>
        <h2>One tool for your whole team.
Free for personal use.</h2>
    </div>
    <PriceCards selectPlans={selectPlans} />
    <Elements stripe={stripePromise}>
      <Checkout/>
      <SubCheckout />
    </Elements>
    </>
)

export default PricingPage;