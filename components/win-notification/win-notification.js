import Image from "next/image";
import classes from "./win-notification.module.scss";
import { useEffect, useRef } from "react";
const WinNotification = ({
  numberOfGuesses,
  correctHero,
  restartGameHandler,
  hasWon,
}) => {
  const { image, name } = correctHero[0];
  const victoryRef = useRef(null);

  useEffect(() => {
    if (hasWon && victoryRef.current) {
      victoryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hasWon]);
  return (
    <div ref={victoryRef} className={classes.notification}>
      <p className={classes.notification__title}>VICTORY!</p>
      <div className={classes.notification__info}>
        <Image
          alt={name}
          src={image}
          width={60}
          height={60}
          className={classes.notification__image}
        />
        <div className={classes.notification__content}>
          <p>You guessed</p>
          <p className={classes.notification__name}>{name}</p>
        </div>
      </div>
      <p className={classes.notification__counter}>
        Number of tries: <span>{numberOfGuesses}</span>
      </p>
      <button
        className={classes.notification__button}
        onClick={restartGameHandler}
      >
        Play Again!
      </button>
    </div>
  );
};

export default WinNotification;
