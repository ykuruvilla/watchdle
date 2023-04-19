const GuessList = ({ guesses }) => {
  if (guesses) {
    return (
      <div>
        <ul>
          {guesses.map((guess) => (
            <GuessListItem guess={guess} key={guess._id} />
          ))}
        </ul>
      </div>
    );
  }
};
export default GuessList;
