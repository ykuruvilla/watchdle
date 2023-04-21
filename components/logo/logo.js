import Image from "next/legacy/image";
import classes from "./logo.module.scss";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <Image
        className={classes.image}
        src="/images/logo.png"
        alt="Overwatch logo"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export default Logo;
