import React from "react";
import axios from "axios";

import StripeCheckout from "react-stripe-checkout";

export default ({ price }) => {
  /* stripe requires price in cent */
  const priceForStripe = price * 100;
  const publishablekey = "pk_test_Bux1EsobGsbSHo39U5iTn0cm00fKQ3CQbr";

  // Callback on success
  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        description: "online payment",
        token
      }
    })
      .then(response => {
        alert("Payment Successful");
      })
      .catch(error => {
        console.log("Payment error : ", error);
        alert("There was an issue with your payment");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Company"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};
