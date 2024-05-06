import styles from "../HeaderCard/HeaderCard.module.css";
import NameCard from "./NameCard/NameCard";
import NavBar from "./NavBar/NavBar";
import Logos from "./Logos/Logos";

const HeaderCard = () => {
  return (
    <div className={styles.main}>
      <NameCard></NameCard>
      <NavBar></NavBar>
      <Logos></Logos>
    </div>
  );
};

export default HeaderCard;
