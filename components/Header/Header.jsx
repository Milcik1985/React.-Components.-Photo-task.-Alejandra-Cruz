import styles from "../Header/Header.module.css";
import HeaderCard from "../HeaderCard/HeaderCard";

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderCard></HeaderCard>
    </header>
  );
};

export default Header;
