import styles from "../HeaderCard/HeaderCard.module.css";
import NameCard from "./NameCard/NameCard";
import NavBar from "./NavBar/NavBar";
import Logos from "./Logos/Logos";
import MobileNavBar from "./NavBar/MobileNav/MobileNav";

const HeaderCard = () => {
  return (
    <div className={styles.main}>
      <NameCard></NameCard>
      <NavBar></NavBar>
      <Logos></Logos>
      <MobileNavBar />
    </div>
  );
};

export default HeaderCard;
