import axios from "axios";

export const createNewHeroInDb = async (heroData) => {
  try {
    const result = await axios.post("/api/hero/create-new-hero", heroData);
  } catch (error) {
    console.log(error);
  }
};
