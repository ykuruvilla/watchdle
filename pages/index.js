import Hero from "../components/hero/hero";
import GuessList from "../components/guess-list/guess-list";
import { getHeroByName, getRandomHero } from "../utils/api/api-calls";
import Head from "next/head";
import { useState } from "react";
import GuessForm from "@/components/guess-form/guess-form";

export default function Home() {
  const [heroToGuess, setHeroToGuess] = useState(null);
  const [guesses, setGuesses] = useState([]);

  const startNewGameHandler = async () => {
    try {
      const randomHero = await getRandomHero();

      setHeroToGuess(randomHero);
    } catch (error) {
      console.log(error);
    }
  };

  const submitGuessHandler = async (heroName) => {
    const response = await getHeroByName(heroName);
    console.log(response.data.hero);
    console.log(guesses);
    setGuesses((prevGuesses) => [...prevGuesses, response.data.hero]);
  };
  return (
    <>
      <Head>
        <title>Watchdle</title>
        <meta name="description" content="An Overwatch game based on Worlde" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heroToGuess={heroToGuess}
        startNewGameHandler={startNewGameHandler}
      />
      <GuessForm onGuessHero={submitGuessHandler} />
      <GuessList heroToGuess={heroToGuess} guesses={guesses} />
    </>
  );
}
