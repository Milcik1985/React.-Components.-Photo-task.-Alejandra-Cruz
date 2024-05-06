import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <a href="#">About</a>
      <a href="#">Gallery</a>
      <a href="#">Music</a>
      <a href="#">Blog</a>
      <a href="#">Contact</a>
    </nav>
  );
};

export default NavBar;
