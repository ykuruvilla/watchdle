const { MongoClient } = require("mongodb");

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const dbName = process.env.MONGO_DBNAME;
const clusterName = process.env.MONGO_CLUSTERNAME;

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://yashakuruvilla:xdJy1oo28ayFSVNs@cluster0.skj6m2x.mongodb.net/watchdle?retryWrites=true&w=majority`
  );
  return client;
};
