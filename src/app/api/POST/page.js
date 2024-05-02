import { Product } from "@/models/Products";
import { NextResponse } from "next/server";

export default async function POST(req) {
  try {
    const { group, description, imageUrl, price, name } = req.body;
    if (!(name && price && imageUrl && description && group)) {
      return NextResponse.status(400).json({
        message: "There is an error in the creation of the database",
      });
    }

    const newProduct = new Product({
      group,
      description,
      imageUrl,
      price,
      name,
    });
    await newProduct.save();

    console.log("The product is saved");
    return NextResponse.status(200).json({ message: "Success" });
  } catch (error) {
   return NextResponse.json({message:'An error occured while saving'},{status:500});
    // You might want to send an error response here if needed
  }
}
