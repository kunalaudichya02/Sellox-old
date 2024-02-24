import Card from "../Models/cardModel.js";
import path from "path";

const newCard = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No files were uploaded");
    }

    console.log(req.body);
    const { productName, price, sellerName, details, duration } = req.body;
    const imagePath = path.normalize(req.file.path);

    // Save image path to database
    const newCard = new Card({
      imageName: req.file.originalname,
      imagePath: imagePath,
      productName: productName,
      price: price,
      sellerName: sellerName,
      details: details,
      duration: duration,
      postingDate: new Date(),
    });

    await newCard.save();

    res.send("Card created succesfullly successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

export default newCard;
