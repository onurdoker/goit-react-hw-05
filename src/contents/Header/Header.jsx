import { NavLink } from "react-router";
import styles from "./Header.module.css";

const Header = () => {
  
  return (
      <nav className={styles.header}>
        <NavLink
            to={"/"}
            className={styles.link}
        >
          Home
        </NavLink>
        
        <NavLink
            to={"/Movies"}
            className={styles.link}
        >
          Movies
        </NavLink>
      </nav>
  );
};

export default Header;