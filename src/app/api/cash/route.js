import { NextResponse } from "next/server";

export async function POST(req) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Unsupported method" }, { status: 405 });
  }

  try {
    const { email, amount } = await req.json(); // Parse JSON body
    const secretKey = process.env.PAYSTACK_SECRET_KEY;

    if (!secretKey) {
      throw new Error("Missing PAYSTACK_SECRET_KEY environment variable");
    }

    const data = {
      email,
      amount: amount * 100, // Convert amount to the smallest currency unit
      callback_url: "https://african-print-site.vercel.app/",
      currency: "GHS",
    };

    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Paystack API error: ${errorText}`);
    }

    const responseData = await response.json();
    return NextResponse.json(responseData, { status: 200 });
  } catch (e) {
    console.error("Payment processing error:", e.message);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
