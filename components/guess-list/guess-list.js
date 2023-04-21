import GuessListItem from "../guess-list-item/guess-list-item";
import classes from "./guess-list.module.scss";

const GuessList = ({ heroToGuess, guesses, numberOfGuesses, hasWon }) => {
  if (guesses) {
    return (
      <div className={classes.guesses}>
        <div className={classes.heading__container}>
          <h3 className={classes.heading__item}>Hero</h3>
          <h3 className={classes.heading__item}>Name</h3>

          <h3 className={classes.heading__item}>Gender</h3>
          <h3 className={classes.heading__item}>Role</h3>
          <h3 className={classes.heading__item}>Has Passive Ability?</h3>
          <h3 className={classes.heading__item}>Base</h3>
          <h3 className={classes.heading__item}>HP</h3>
          <h3 className={classes.heading__item}>Armor</h3>
          <h3 className={classes.heading__item}>Shields</h3>
        </div>
        <div className={classes.guesses__container}>
          {guesses.map((guess) => (
            <GuessListItem
              heroToGuess={heroToGuess}
              guess={guess}
              key={guess._id}
            />
          ))}
        </div>
      </div>
    );
  }
};
export default GuessList;
