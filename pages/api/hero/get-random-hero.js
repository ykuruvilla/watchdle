import { connectToDatabase } from "../../../utils/db/db";

const collectionName = process.env.MONGO_COLLECTION_NAME;

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const client = await connectToDatabase();
      const db = client.db();
      const collection = db.collection("heroes");

      try {
        const heroCount = await collection.countDocuments();

        const randomIndex = Math.floor(Math.random() * heroCount);

        const [randomHero] = await collection
          .aggregate([{ $skip: randomIndex }, { $limit: 1 }])
          .toArray();

        res
          .status(200)
          .json({ hero: randomHero, message: "Sucessfully retrieved hero" });
      } catch (error) {
        client.close();
        res.status(500).json({ message: "Error- could not retrieve hero" });
        return;
      }
    } catch (error) {
      res.status(500).json({ message: "Error connecting to database" });
      return;
    }
  }
};

export default handler;
