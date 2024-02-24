import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  imageName: String,
  imagePath: String,
  productName: String,
  price: Number,
  sellerName: String,
  details: String,
  duration: String,
  postingDate: {
    type: Date,
    default: Date.now(),
  },
});

const Card = mongoose.model("Card", cardSchema);

export default Card;
