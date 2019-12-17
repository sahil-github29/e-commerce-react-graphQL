const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  /* this will load the .env file */
  require("dotenv").config();
}

// getting strip secret key
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.port || 5000;

/* any of the request coming in I want you to process their "body tag" and convert into JSON */
app.use(bodyParser.json());

/* urlencoded => is a way for us to make sure that the URLs string we are getting in and when passing out, do not contain things like spaces, symbols, special characters, and if they do they properly escaped */
app.use(bodyParser.urlencoded({ extended: true }));

/* 
  development server : 5000
  client : 3000

  server and client are not different port/orogin and when out frontend makes a request to our backend what cors does is that it checks to makes sure that the origin is same, if it is not the same then it denies the request which is a safety feature.

  Using cors() we can enable server to allow request from different sesrver
*/
app.use(cors());

/* on production serve files from "client/build" and response back with index.html for any request. */
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/", "index.html"));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

/* Stripe payment route */
app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
    description: "Charges for test customer"
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
