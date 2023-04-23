import GuessListItem from "../guess-list-item/guess-list-item";
import classes from "./guess-list.module.scss";

const GuessList = ({ heroToGuess, guesses }) => {
  if (guesses) {
    return (
      <div className={classes.guesses}>
        <div className={classes.heading__container}>
          <h3 className={classes.heading__item}>Hero</h3>
          <h3 className={classes.heading__item}>Gender</h3>
          <h3 className={classes.heading__item}>Role</h3>
          <h3 className={classes.heading__item}>Has Passive Ability?</h3>
          <h3 className={classes.heading__item}>Base</h3>
          <h3 className={classes.heading__item}>HP</h3>
          <h3 className={classes.heading__item}>Armor</h3>
          <h3 className={classes.heading__item}>Shields</h3>
        </div>

        {guesses.map((guess, index) => (
          <GuessListItem heroToGuess={heroToGuess} guess={guess} key={index} />
        ))}
      </div>
    );
  }
};
export default GuessList;
