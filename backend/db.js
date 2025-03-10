import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://${process.env.DbUserName}:${process.env.DbPassword}@messagercluster.hbvqq.mongodb.net/messagerDB?retryWrites=true&w=majority&appName=messagerCluster`
    );
    console.log(
      `MongoDB connected sucesfully ${conn.connection.host}, Database connected is : ${conn.connection.name}`
    );
  } catch (error) {
    console.log(`Error connecting to database ${error}`);
  }
};
