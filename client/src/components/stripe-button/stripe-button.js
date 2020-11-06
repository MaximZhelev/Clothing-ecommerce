import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";



const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Hj5VHDjnU60WGQJp90isxY6C8TA9ahkYql9ZiO8yLHgOwQot9Z2j4J79OH1awPP4i81zvvWRfUvo1IuVGg7M1C500qqrYQYGR";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    }).then((response) => {
      alert("Payment successful");
    }).catch(error => {
        console.log('Payment error: ',JSON.parse(error))
        alert(
            'There was as issue with your payment. Please sure you use the provided credit cart.'
        )
    })
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
