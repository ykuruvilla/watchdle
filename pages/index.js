import Hero from "../components/hero/hero";
import GuessList from "../components/guess-list/guess-list";
import { getHeroByName, getRandomHero } from "../utils/api/api-calls";
import Head from "next/head";
import { use, useEffect, useState } from "react";
import GuessForm from "@/components/guess-form/guess-form";
import Loader from "@/components/loader/loader";

export default function Home() {
  const [heroToGuess, setHeroToGuess] = useState(null);
  const [guesses, setGuesses] = useState([]);
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [loading, setLoading] = useState(true);

  const getNewHero = async () => {
    try {
      const newHero = await getRandomHero();
      setHeroToGuess(newHero);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNewHero();
  }, []);

  const submitGuessHandler = async (heroName) => {
    const response = await getHeroByName(heroName);
    setGuesses((prevGuesses) => [...prevGuesses, response.data.hero]);
    setNumberOfGuesses((prevNumber) => prevNumber + 1);
  };
  return (
    <>
      <Head>
        <title>Watchdle</title>
        <meta name="description" content="An Overwatch game based on Worlde" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero numberOfGuesses={numberOfGuesses} />
      <Loader loading={loading} />
      {heroToGuess && <GuessForm onGuessHero={submitGuessHandler} />}
      <GuessList
        heroToGuess={heroToGuess}
        numberOfGuesses={numberOfGuesses}
        guesses={guesses}
      />
      {heroToGuess && <p>{heroToGuess.name}</p>}
    </>
  );
}
