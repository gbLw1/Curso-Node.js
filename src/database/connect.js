const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

module.exports = connectToDatabase;

// const mongoose = require("mongoose");

// const connectToDatabase = () => {
//   mongoose
//     .connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     })
//     .then(() => {
//       console.log("Connected to database");
//     })
//     .catch((error) => {
//       console.log("Error connecting to database", error);
//     });
// };

// module.exports = connectToDatabase;
