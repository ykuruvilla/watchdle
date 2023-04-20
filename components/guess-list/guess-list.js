import { useState } from "react";
import GuessListItem from "../guess-list-item/guess-list-item";
import Clue from "../clue/clue";

const GuessList = ({ heroToGuess, guesses, numberOfGuesses }) => {
  const [showClue, setShowClue] = useState(false);

  const showClueHandler = () => {
    setShowClue(true);
  };

  if (guesses) {
    return (
      <>
        {!showClue && (
          <div>
            {numberOfGuesses > 3 && (
              <button onClick={showClueHandler}>Show Clue</button>
            )}
          </div>
        )}
        <div>
          {guesses.length > 0 && numberOfGuesses < 4 && (
            <p>
              Clue in {4 - numberOfGuesses}{" "}
              {4 - numberOfGuesses === 1 ? "try" : "tries"}
            </p>
          )}
          {showClue && <Clue heroToGuess={heroToGuess} />}
        </div>
        <div>
          <ul>
            {guesses.map((guess) => (
              <GuessListItem
                heroToGuess={heroToGuess}
                guess={guess}
                key={guess._id}
              />
            ))}
          </ul>
        </div>
      </>
    );
  }
};
export default GuessList;
