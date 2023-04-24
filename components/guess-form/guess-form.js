import { use, useState } from "react";
import classes from "./guess-form.module.scss";

const GuessForm = ({ guesses, onGuessHero, heroError }) => {
  const [guessedHero, setGuessedHero] = useState("");
  const [formError, setFormError] = useState(false);
  const [duplicateError, setDuplicateError] = useState(false);

  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setFormError(false);
    setDuplicateError(false);
    if (guessedHero.trim() === "") {
      setFormError(true);
      return;
    }
    if (
      guesses.some(
        (guess) => guess.name.toLowerCase() === guessedHero.toLowerCase()
      )
    ) {
      setDuplicateError(true);
      return;
    }

    const reformattedHeroName = guessedHero.replace(/\s/g, "-");
    onGuessHero(reformattedHeroName);
    setGuessedHero("");
  };

  return (
    <>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div className={classes.form__inputContainer}>
          <input
            placeholder="Enter your first hero..."
            className={
              formError || heroError || duplicateError
                ? `${classes.form__input} ${classes.form__inputError}`
                : classes.form__input
            }
            value={guessedHero}
            onChange={(e) => setGuessedHero(e.target.value)}
            type="text"
            name="hero"
            id="hero"
          />
          {formError && (
            <p className={classes.form__error}>Please enter a hero...</p>
          )}
          {heroError && (
            <p className={classes.form__error}>
              No hero with that name found. Please try again...
            </p>
          )}
          {duplicateError && (
            <p className={classes.form__error}>
              You've already guessed this hero. Please enter a new one...
            </p>
          )}
        </div>
      </form>
    </>
  );
};

export default GuessForm;
