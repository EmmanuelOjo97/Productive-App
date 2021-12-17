import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ItemModel from "./food.js";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/insert", async (req, res) => {
  const itemName = req.body.itemName;
  const days = req.body.days;

  const item = new ItemModel({ itemName: itemName });
  try {
    await item.save();
    console.log(item);
    // res.send("Thank you gamer");
  } catch (error) {
    console.log(error);
  }
});

app.get("/read", async (req, res) => {
  ItemModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await ItemModel.findByIdAndDelete(id).exec();
  res.send("item deleted");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
