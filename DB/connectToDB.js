const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `DataBase Connected 🍔 \n HOST :: ${connect.connection.host} \n NAME ::  ${connect.connection.name} `
    );
  } catch (error) {
    console.error(` ERR :: Couldn't connect to DB 😵‍💫`, error);
    process.exit(1);
  }
};

module.exports = connectDB;
