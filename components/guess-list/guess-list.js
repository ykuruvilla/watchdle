import GuessListItem from "../guess-list-item/guess-list-item";

const GuessList = ({ heroToGuess, guesses }) => {
  if (guesses) {
    return (
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
    );
  }
};
export default GuessList;
