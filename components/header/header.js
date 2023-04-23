import React, { use, useState } from "react";
import Logo from "../logo/logo";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import classes from "./header.module.scss";
import HowToPlayModal from "../how-to-play/how-to-play";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <header className={`${inter.className} ${classes.header}`}>
      <div className={classes.header__logoContainer}>
        <Logo />
        <h1 className={classes.header__title}>Watchdle</h1>
      </div>
      <div className={classes.header__iconContainer}>
        <AiOutlineQuestionCircle
          className={classes.header__icon}
          onClick={showModalHandler}
        />
      </div>
      <HowToPlayModal
        closeModalHandler={closeModalHandler}
        showModal={showModal}
      />
    </header>
  );
};

<header className="header">
  <div className="header-center">Logo</div>
  <div className="header-right">Menu</div>
</header>;

export default Header;
