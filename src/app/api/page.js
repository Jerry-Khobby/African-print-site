import { initiMongoose } from "@/lib/mongoose";
import Product from "@/models/Products";

export default async function handle(req, res) {
    try {
        await initiMongoose();
        console.log("MongoDB connection established");

        const products = await Product.find().exec();
        res.status(200).json(products); // Set status and send JSON response
    } catch (error) {
        console.error("Error handling request:", error);
        if (res) {
            res.status(500).json({ error: "Internal Server Error" }); // Set status and send error response if `res` is defined
        } else {
            console.error("Response object is undefined"); // Log an error if `res` is undefined
        }
    }
}
