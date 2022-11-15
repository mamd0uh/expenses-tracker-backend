const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL,
      {
        useUnifiedTopology: false,
        useNewUrlParser: true,
      }
    );
    console.log("DB connected Successfully");
  } catch (err) {
    console.log(`Error ${err.message}`);
  }
};

module.exports = dbConnect;
