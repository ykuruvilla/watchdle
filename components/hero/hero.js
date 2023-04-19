const Hero = ({ startNewGameHandler, heroToGuess }) => {
  return (
    <>
      <div>
        <h2>Guess the Overwatch Hero!</h2>
        {!heroToGuess && <p>Press the start button to begin</p>}
      </div>
      <div>
        {!heroToGuess && (
          <button onClick={startNewGameHandler}>Start New Game</button>
        )}
      </div>
    </>
  );
};
export default Hero;
