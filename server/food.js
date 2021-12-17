import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
  },
  // daysSinceEaten: {
  //   type: Number,
  //   required: true,
  // },
});

const FoodModel = mongoose.model("Food", FoodSchema);

export default FoodModel;
