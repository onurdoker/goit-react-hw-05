import { NavLink } from "react-router";
import styles from "./Header.module.css";

const Header = () => {
  
  return (
      <nav className={styles.header}>
        <NavLink
            to={"/"}
        >Home</NavLink>
        <NavLink to={"/MoviesPage"}>Movies</NavLink>
      </nav>
  );
};

export default Header;