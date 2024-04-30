import { initiMongoose } from "@/lib/mongoose";
import Product from "@/models/Products";

export default async function handle(req, res) {
    try {
        await initiMongoose();
        console.log("MongoDB connection established");

        const products = await Product.find().exec();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error handling request:", error);
        res.status(401).json({'message':'Invalid'})
    }
}
