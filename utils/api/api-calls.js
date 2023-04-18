import axios from "axios";

export const createNewHeroInDb = async (heroData) => {
  // const {
  //   name,
  //   gender,
  //   role,
  //   baseOfOperations,
  //   hp,
  //   armor,
  //   shields,
  //   passiveAbility,
  //   ultimateAbility,
  // } = heroData;

  // if (
  //   name &&
  //   gender &&
  //   role &&
  //   baseOfOperations &&
  //   hp &&
  //   armor &&
  //   shields &&
  //   passiveAbility &&
  //   ultimateAbility
  // ) {
  // }

  try {
    const result = await axios.post("/api/hero/create-new-hero", heroData);
  } catch (error) {
    console.log(error);
  }
};
