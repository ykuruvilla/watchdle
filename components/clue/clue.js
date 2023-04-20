const Clue = ({ heroToGuess }) => {
  return (
    <div>
      <p>
        {heroToGuess.passiveAbility !== "N/A"
          ? `Passive Ability: ${heroToGuess.passiveAbility}`
          : `Ultimate Ability: ${heroToGuess.ultimateAbility}`}
      </p>
    </div>
  );
};

export default Clue;
