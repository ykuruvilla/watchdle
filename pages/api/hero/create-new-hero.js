import { connectToDatabase } from "../../../utils/db/db";

const collectionName = process.env.MONGO_COLLECTION_NAME;

const handler = async (req, res) => {
  const heroData = req.body;

  heroData.armor = +armor;
  heroData.shield = +shield;
  heroData.hp = +hp;

  if (req.method === "POST") {
    const client = await connectToDatabase();

    const db = client.db();

    const newHero = await db.collection(collectionName).insertOne(heroData);
    res.status(201).json({ message: "Hero successfully created" });
    client.close;
  }
};

export default handler;
