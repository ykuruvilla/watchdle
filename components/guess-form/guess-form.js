import { useState } from "react";

const GuessForm = ({ onGuessHero }) => {
  const [guessedHero, setGuessedHero] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const reformattedHeroName = guessedHero.replace(/\s/g, "-");
    onGuessHero(reformattedHeroName);
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="hero">
          Hero
          <input
            value={guessedHero}
            onChange={(e) => setGuessedHero(e.target.value)}
            type="text"
            name="hero"
            id="hero"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default GuessForm;
