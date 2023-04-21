import { useState } from "react";
import classes from "./guess-form.module.scss";

const GuessForm = ({ onGuessHero }) => {
  const [guessedHero, setGuessedHero] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const reformattedHeroName = guessedHero.replace(/\s/g, "-");
    onGuessHero(reformattedHeroName);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <label htmlFor="hero">
        <input
          placeholder="Enter your first hero..."
          className={classes.form__input}
          value={guessedHero}
          onChange={(e) => setGuessedHero(e.target.value)}
          type="text"
          name="hero"
          id="hero"
        />
      </label>
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default GuessForm;
