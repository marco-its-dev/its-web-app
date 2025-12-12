import mongoose, { Document, Schema } from "mongoose";

export type Product = {
  title: string;
  uri: number;
};

export interface IProduct extends Document {
  title: string;
  uri: number;
}

const productSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  uri: {
    type: String,
    required: true,
  },
});

const Product =
  mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default Product;
