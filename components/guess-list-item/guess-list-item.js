import Image from "next/legacy/image";
import React from "react";
import classes from "./guess-list-item.module.scss";

const GuessListItem = ({ heroToGuess, guess }) => {
  const {
    name,
    gender,
    image,
    role,
    hp,
    shield,
    baseOfOperations,
    armor,
    passiveAbility,
  } = guess;

  const compareGuess = (guessedHero, correctHero, propertyToCompare) => {
    if (guessedHero[propertyToCompare] === correctHero[propertyToCompare]) {
      return `${classes.table__element} ${classes.correct}`;
    }
    return `${classes.table__element} ${classes.incorrect}`;
  };

  const isHigherOrLower = (guessedHero, correctHero, numberToCompare) => {
    if (guessedHero[numberToCompare] > correctHero[numberToCompare]) {
      return String.fromCharCode(8595);
    }
    if (guessedHero[numberToCompare] < correctHero[numberToCompare]) {
      return String.fromCharCode(8593);
    }
  };

  return (
    <div className={classes.table__row}>
      <div className={`${classes.table__image} ${classes.table__element}`}>
        <Image
          src={image}
          alt={`A portrait of ${name}`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={compareGuess(guess, heroToGuess, "name")}>
        <p>{name}</p>
      </div>
      <div className={compareGuess(guess, heroToGuess, "gender")}>
        <p>{gender}</p>
      </div>
      <div className={compareGuess(guess, heroToGuess, "role")}>
        <p>{role}</p>
      </div>
      <div className={compareGuess(guess, heroToGuess, "passiveAbility")}>
        <p>{passiveAbility === "N/A" ? "No" : "Yes"}</p>
      </div>
      <div className={compareGuess(guess, heroToGuess, "baseOfOperations")}>
        <p>{baseOfOperations}</p>
      </div>
      <div className={compareGuess(guess, heroToGuess, "hp")}>
        <p>{hp}</p>
        <span>{isHigherOrLower(guess, heroToGuess, "hp")}</span>
      </div>
      <div className={compareGuess(guess, heroToGuess, "armor")}>
        <p>{armor}</p>
        <span>{isHigherOrLower(guess, heroToGuess, "armor")}</span>
      </div>
      <div className={compareGuess(guess, heroToGuess, "shield")}>
        <p>
          {shield}
          <span>{isHigherOrLower(guess, heroToGuess, "shield")}</span>
        </p>
      </div>
    </div>
  );
};

export default GuessListItem;
