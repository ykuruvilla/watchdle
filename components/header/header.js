import React from "react";
import Logo from "../logo/logo";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import classes from "./header.module.scss";

const Header = () => {
  return (
    <header className={`${inter.className} ${classes.header}`}>
      <Logo />
      <h1 className={classes.header__title}>Watchdle</h1>
    </header>
  );
};

export default Header;
