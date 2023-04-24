import GuessListItem from "../guess-list-item/guess-list-item";
import classes from "./how-to-play.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

const HowToPlayModal = ({ showModal, closeModalHandler }) => {
  const zarya = {
    name: "Zarya",
    gender: "Female",
    role: "Tank",
    baseOfOperations: "Russia",
    hp: 250,
    armor: 0,
    shield: 225,
  };

  const sigma = {
    name: "Sigma",
    gender: "Male",
    role: "Tank",
    baseOfOperations: "Holland",
    hp: 350,
    armor: 0,
    shield: 200,
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cd7a4c0a0df8924afb2c9f6df864ed040f20250440c36ca2eb634acf6609c5e4.png",
  };
  return (
    <div
      className={
        showModal ? `${classes.modal} ${classes.modalActive}` : classes.modal
      }
    >
      <div className={classes.modal__titleContainer}>
        <h2 className={classes.modal__title}>How to Play</h2>
        <AiOutlineCloseCircle
          onClick={closeModalHandler}
          className={classes.modal__icon}
        />
      </div>
      <div className={classes.modal__contentContainer}>
        <p className={classes.modal__content}>
          Guess the hero from Blizzard's game 'Overwatch 2'
        </p>
        <p className={classes.modal__content}>
          Simply type in the same of a hero and it will reveal its properties
        </p>
        <p className={classes.modal__content}>
          The color of the tiles willl change to show how close your guess was
          to the hero to find.
        </p>
        <p className={classes.modal__content}>
          <span className={classes.modal__contentGreen}>Green</span> indicates
          the property is a correct match.
        </p>
        <p className={classes.modal__content}>
          <span className={classes.modal__contentRed}>Red</span> indicates the
          property is a correct match.
        </p>
        <p className={classes.modal__content}>
          With arrows, it also indicates if the answer property is above or
          below your guess.
        </p>
      </div>
      <div className={classes.modal__titleContainer}>
        <h2 className={classes.modal__title}>Example</h2>
      </div>
      <p className={classes.modal__content}>
        Consider the correct answer is
        <span className={classes.modal__hero}> Zarya</span>
      </p>
      <p className={classes.modal__content}>
        If you enter <span className={classes.modal__hero}> Sigma</span>, these
        properties will appear:
      </p>
      <div className={classes.modal__example}>
        <GuessListItem heroToGuess={zarya} guess={sigma} />
      </div>
      <h6 className={classes.modal__subtitle}>
        Gender: <span className={classes.modal__contentRed}> Red</span>
      </h6>
      <p className={classes.modal__content}>
        It isn't a match, Sigma is male while Zarya is female.
      </p>
      <h6 className={classes.modal__subtitle}>
        Role: <span className={classes.modal__contentGreen}> Green</span>
      </h6>
      <p className={classes.modal__content}>
        It's a match, they are both tanks
      </p>
      <h6 className={classes.modal__subtitle}>
        Has Passive Ability?:
        <span className={classes.modal__contentRed}> Red</span>
      </h6>
      <p className={classes.modal__content}>
        It isn't a match, Sigma doesn't have a passive ability while Zarya does
        (Energy).
      </p>
      <h6 className={classes.modal__subtitle}>
        Base:
        <span className={classes.modal__contentRed}> Red</span>
      </h6>
      <p className={classes.modal__content}>
        It isn't a match, Sigma is based in Netherlands while Zarya is based in
        Russia.
      </p>
      <h6 className={classes.modal__subtitle}>
        HP:
        <span className={classes.modal__contentRed}> Red</span> and a down arrow
      </h6>
      <p className={classes.modal__content}>
        It isn't a match, Sigma has 350HP while Zarya has 250HP.
      </p>
      <h6 className={classes.modal__subtitle}>
        Armor:
        <span className={classes.modal__contentGreen}> Green</span>
      </h6>
      <p className={classes.modal__content}>
        It's a match, they both have 0 armor.
      </p>
      <h6 className={classes.modal__subtitle}>
        HP:
        <span className={classes.modal__contentRed}> Red</span> and an up arrow
      </h6>
      <p className={classes.modal__content}>
        It isn't a match, Sigma has 200 shields while Zarya has 225.
      </p>
    </div>
  );
};

export default HowToPlayModal;
