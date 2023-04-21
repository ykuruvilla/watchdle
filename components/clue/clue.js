import classes from "./clue.module.scss";

const Clue = ({ heroToGuess }) => {
  return (
    <div>
      <p className={classes.clue}>
        {heroToGuess.passiveAbility !== "N/A"
          ? `Passive Ability: ${heroToGuess.passiveAbility}`
          : `Ultimate Ability: ${heroToGuess.ultimateAbility}`}
      </p>
    </div>
  );
};

export default Clue;
