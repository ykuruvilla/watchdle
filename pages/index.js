import axios from "axios";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [heroToGuess, setHeroToGuess] = useState();

  const startNewGameHandler = async () => {
    try {
      const response = await axios.get("api/hero/get-new-hero");
      const {
        data: { hero },
      } = response;
      setHeroToGuess(hero);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Head>
        <title>Watchdle</title>
        <meta name="description" content="An Overwatch game based on Worlde" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={startNewGameHandler}>Start</button>
    </>
  );
}
