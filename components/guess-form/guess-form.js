import { useRef, useEffect, useState } from "react";
import classes from "./guess-form.module.scss";
import { getHeroNames } from "@/utils/api/api-calls";
import Image from "next/image";

const GuessForm = ({ guesses, onGuessHero, heroError }) => {
  const [guessedHero, setGuessedHero] = useState("");
  const [formError, setFormError] = useState(false);
  const [duplicateError, setDuplicateError] = useState(false);
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);

  const wrapperRef = useRef(null);

  const getHeroOptions = async () => {
    try {
      const response = await getHeroNames();
      setOptions(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHeroOptions();
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const setSearch = (heroName) => {
    setGuessedHero(heroName);
    setDisplay(false);
  };

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
    setDisplay(false);
  };

  const handleDropdownClick = (heroName) => {
    setFormError(false);
    setDuplicateError(false);
    if (
      guesses.some(
        (guess) => guess.name.toLowerCase() === guessedHero.toLowerCase()
      )
    ) {
      setDuplicateError(true);
      return;
    }

    onGuessHero(heroName);
    setGuessedHero("");
    setDisplay(false);
  };

  return (
    <>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div ref={wrapperRef} className={classes.form__inputContainer}>
          <input
            autoComplete="off"
            value={guessedHero}
            onChange={(e) => {
              setDisplay(true);
              setGuessedHero(e.target.value);
            }}
            placeholder="Enter your first hero..."
            className={
              formError || heroError || duplicateError
                ? `${classes.form__input} ${classes.form__inputError}`
                : classes.form__input
            }
            type="text"
            name="hero"
            id="hero"
          />
          {display && (
            <div className={classes.form__autoContainer}>
              {options
                .filter(({ name }) =>
                  name.toLowerCase().includes(guessedHero.toLowerCase())
                )
                .map((hero) => {
                  return (
                    <div
                      className={classes.form__autoOption}
                      onClick={() => {
                        handleDropdownClick(hero.name);
                      }}
                      key={hero._id}
                      tabIndex="0"
                    >
                      <Image
                        src={hero.image}
                        alt={hero.name}
                        width={50}
                        height={50}
                      />
                      <span>{hero.name}</span>
                    </div>
                  );
                })}
            </div>
          )}
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
