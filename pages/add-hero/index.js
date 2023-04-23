import AddHeroForm from "@/components/add-hero-form/add-hero-form";
import { createNewHeroInDb } from "../../utils/api/api-calls";

const AddHeroPage = () => {
  const addNewHero = async (heroData) => {
    const repsonse = await createNewHeroInDb(heroData);
  };

  return <AddHeroForm onAddHero={addNewHero} />;
};

export const getServerSideProps = async () => {
  return { redirect: { destination: "/", permanent: true } };
};

export default AddHeroPage;
