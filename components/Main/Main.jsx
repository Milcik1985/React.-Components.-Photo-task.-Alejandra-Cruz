import styles from "../Main/Main.module.css";
import MainHeader from "../Header/MainHeader/MainHeader";
import MainText from "../MainText/MainText";

const Main = () => {
  return (
    <main className={styles.container}>
      <MainHeader />
      <MainText />
    </main>
  );
};

export default Main;
