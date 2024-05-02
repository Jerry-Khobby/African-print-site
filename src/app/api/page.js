import { initiMongoose } from "@/lib/mongoose";
import Product from "@/models/Products";
import { NextResponse } from "next/server";


export default  async function GET(Request) {
    try {
        await initiMongoose();
        console.log("MongoDB connection established");

        const products = await Product.find();
        NextResponse.status(200).json(products); // Set status and send JSON response
    } catch (error) {
        console.error("Error handling request:", error);
        NextResponse.json({ error: "Internal Server Error" }); // Set status and send error response
    }
}
