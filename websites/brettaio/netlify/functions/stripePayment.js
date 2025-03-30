// netlify/functions/stripePayment.js

// Load the Stripe library and initialize it with your secret key (stored as an environment variable)
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  // Only accept POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    // Parse the incoming request data
    const { amount, currency, source } = JSON.parse(event.body);

    // Create a charge with Stripe (using charges for demonstration purposes)
    // For production, consider using PaymentIntents for better handling of SCA requirements
    const charge = await stripe.charges.create({
      amount,
      currency,
      source, // Example: 'tok_visa' is a test token provided by Stripe
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(charge),
    };
  } catch (error) {
    console.error('Stripe Error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
