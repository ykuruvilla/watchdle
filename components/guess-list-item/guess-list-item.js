import Image from "next/image";
import React from "react";
import classes from "./guess-list-item.module.css";

const GuessListItem = ({ heroToGuess, guess }) => {
  const { name, image, role, hp, shield, baseOfOperations, armor } = guess;

  const compareGuess = (guessedHero, correctHero, propertyToCompare) => {
    if (guessedHero[propertyToCompare] === correctHero[propertyToCompare]) {
      return `${classes.listItemContainer} ${classes.correct}`;
    }
    return `${classes.listItemContainer} ${classes.incorrect}`;
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
    <li className={classes.listItem}>
      <div className={classes.listItemContainer}>
        <Image
          src={image}
          alt={`A portrait of ${name}`}
          height={100}
          width={100}
        />
      </div>
      <div className={compareGuess(guess, heroToGuess, "name")}>
        <p>{name}</p>
      </div>
      <div className={compareGuess(guess, heroToGuess, "role")}>
        <p>{role}</p>
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
        <p>{shield}</p>
        <span>{isHigherOrLower(guess, heroToGuess, "shield")}</span>
      </div>
    </li>
  );
};

export default GuessListItem;
