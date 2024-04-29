import { model, Schema } from "mongoose";

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

const Product = model("Product", ProductSchema);

export default Product;
