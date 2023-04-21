import classes from "./hero.module.scss";
import Clue from "../clue/clue";
import { useState } from "react";

const Hero = ({ heroToGuess, hasWon, guesses }) => {
  const [showClue, setShowClue] = useState(false);
  const showClueHandler = () => {
    setShowClue(true);
  };
  return (
    <div className={classes.hero__container}>
      <div className={classes.hero}>
        <h2 className={classes.hero__heading}>Guess the Overwatch Hero!</h2>
        <p className={classes.hero__copy}>Enter a hero to begin</p>
        {guesses.length < 4 && (
          <p className={classes.hero__clue}>
            Clue in {4 - guesses.length}
            {4 - guesses.length === 1 ? " try" : " tries"}
            ...
          </p>
        )}
        {!showClue && (
          <div>
            <button
              disabled={guesses.length < 4}
              className={classes.hero__button}
              onClick={showClueHandler}
            >
              Show Clue
            </button>
          </div>
        )}
        <div>{showClue && <Clue heroToGuess={heroToGuess} />}</div>
      </div>
    </div>
  );
};
export default Hero;
