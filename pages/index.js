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
  const [loading, setLoading] = useState(true);
  const [hasWon, setHasWon] = useState(false);
  const [heroError, setHeroError] = useState(false);

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
    setHeroError(false);
    try {
      const response = await getHeroByName(heroName);
      if (response) {
        setGuesses((prevGuesses) => [...prevGuesses, response.data.hero]);
      }
      if (response.data.hero.name === heroToGuess.name) {
        setHasWon(true);
      }
    } catch (error) {
      setHeroError(true);
    }
  };

  const restartGameHandler = async () => {
    try {
      const newHero = await getNewHero();
      setHasWon(false);
      setGuesses([]);
    } catch (error) {}
  };
  return (
    <>
      {hasWon && <p>Winner</p>}
      <Head>
        <title>Watchdle</title>
        <meta name="description" content="An Overwatch game based on Worlde" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heroToGuess={heroToGuess} guesses={guesses} hasWon={hasWon} />
      <Loader loading={loading} />
      {!hasWon && heroToGuess && (
        <GuessForm
          guesses={guesses}
          heroError={heroError}
          onGuessHero={submitGuessHandler}
        />
      )}
      {guesses.length > 0 && (
        <GuessList heroToGuess={heroToGuess} guesses={guesses} />
      )}
      {heroToGuess && <p>{heroToGuess.name}</p>}
      {hasWon && <button onClick={restartGameHandler}>Play Again</button>}
    </>
  );
}
