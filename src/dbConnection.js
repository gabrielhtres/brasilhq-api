const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.set("bufferCommands", true);

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://brasilhq:brasilhq@brasil-hq.chjhnkg.mongodb.net/brasil-hq?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log("Mongoose is connected")
    );
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDB;
