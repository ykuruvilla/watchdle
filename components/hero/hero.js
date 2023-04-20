import classes from "./hero.module.scss";
const Hero = ({ numberOfGuesses }) => {
  return (
    <>
      <div className={classes.hero}>
        <h2 className={classes.hero__heading}>Guess the Overwatch Hero!</h2>
        {numberOfGuesses === 0 && (
          <p className={classes.hero__copy}>Enter a hero to begin</p>
        )}
      </div>
    </>
  );
};
export default Hero;
