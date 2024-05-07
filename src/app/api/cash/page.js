
import { NextResponse } from "next/server";

export default async function POST(request) {
  try {
    const { email, amount } = await request.json();
    const secretKey = process.env.SECRET_KEY;

    if (!secretKey) {
      throw new Error("Missing PAYSTACK_SECRET_KEY environment variable");
    }

    const data = {
      email,
      amount: amount * 100,
      callback_url: "https://african-print-site.vercel.app/",
      currency: "GHS",
    };

    const response = await fetch(
      'https://api.paystack.co/transaction/initialize',
      {
        method: 'POST',
        headers: {
          authorization: `Bearer ${secretKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error('An error occurred while processing the payment');
    }

    const responseData = await response.json();
    return NextResponse.json(responseData); // Return the Paystack response

  } catch (error) {
    console.error("Payment processing error", error);
    return NextResponse.json(error);
  }
}
