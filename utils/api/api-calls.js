import axios from "axios";

export const createNewHeroInDb = async (heroData) => {
  try {
    const result = await axios.post("/api/hero/create-new-hero", heroData);
  } catch (error) {
    console.log(error);
  }
};

export const getRandomHero = async () => {
  try {
    const response = await axios.get("/api/hero/get-random-hero");
    const {
      data: { hero },
    } = response;
    return hero;
  } catch (error) {
    console.log(error);
  }
};

export const getHeroByName = async (heroName) => {
  try {
    const response = await axios.get(`/api/hero/${heroName}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
