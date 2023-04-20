import Header from "../header/header";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className={inter.className}>{props.children}</main>
    </>
  );
};

export default Layout;
