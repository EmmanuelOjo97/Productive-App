import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  // daysSinceEaten: {
  //   type: Number,
  //   required: true,
  // },
});

const ItemModel = mongoose.model("Item", ItemSchema);

export default ItemModel;
