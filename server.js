// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// this loads the secret key from the .env file into the code... so that you don't see it. 
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// bring in the stripe library AFTER the command above that pulls the .env file... 
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// loads the express server
const app = express();
const port = process.env.PORT || 5000; //process.env.PORT would be set by heroku when you serve it there... 

app.use(bodyParser.json()); // process body tag so that we can convert to JSON
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors()); // need to allow cross port requests...



// use the express.static middleware if you use path/client/build which is all of the static react files 
  // for all urls * where you have a GET request.
  // res is the response we send back index.html which is our react app
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build'))); 
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

// route for stripe payment request
// when you get a POST request to /payment...
app.post('/payment', (req, res) => {
  // this is the request object
    const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };
// this is the response object... 
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});