import { capitaliseString } from "@/utils/helpers";
import { connectToDatabase } from "@/utils/db/db";

const collectionName = process.env.MONGO_COLLECTION_NAME;

const handler = async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { heroName },
    } = req;
    const capitalisedName = capitaliseString(heroName);
    try {
      const client = await connectToDatabase();
      const db = client.db();
      let foundHero;

      try {
        foundHero = await db
          .collection("heroes")
          .findOne({ name: capitalisedName });
        if (!foundHero) {
          res
            .status(404)
            .json({ message: "Could not find hero with that name" });
        }
      } catch (error) {
        client.close();
        res
          .status(404)
          .json({ message: "Could not find a hero with that name" });
        return;
      }

      res.status(200).json({ hero: foundHero, message: "Hero found!" });
    } catch (error) {
      res.status(500).json({ message: "Error connecting to the database" });
      return;
    }
  }
};

export default handler;
