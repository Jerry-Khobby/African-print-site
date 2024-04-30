import mongoose,{ model, Schema } from "mongoose";

// Check if the model already exists before defining it
const existingProductModel = mongoose.models["Products"];

// Define Product schema
const ProductSchema = new Schema({
    group: String,
    description: String,
    imageUrl: {
        type: String,
        validate: {
            validator: function(v) {
                // Basic URL validation, adjust as needed
                return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    price: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: props => `${props.value} is not an integer price!`
        }
    },
    name: {
        type: String,
        required: true
    }
});

// Define Product model only if it doesn't already exist
export const Product = existingProductModel || model("Products", ProductSchema);
