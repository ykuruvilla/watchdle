import { connectToDatabase } from "@/utils/db/db";

const collectionName = process.env.MONGO_COLLECTION_NAME;

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const client = await connectToDatabase();
      const db = client.db();

      try {
        const heroesWithNamesAndImage = await db
          .collection(collectionName)
          .find({})
          .project({ name: 1, image: 1 })
          .toArray();

        const sortedHeroes = heroesWithNamesAndImage.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        res.status(200).json({ data: sortedHeroes });
        client.close();
      } catch (error) {
        res
          .status(500)
          .json({ message: "Could not fetch data from the database" });
        client.close();
        return;
      }
    } catch (error) {
      res.status(500).json({ message: "Error connecting to the database" });
      return;
    }
  }
};

export default handler;
