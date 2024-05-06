import styles from "./Photo.module.css";
import Alejandra from "../../../../assests/Alejandra.jpeg";

const Photo = () => {
  return (
    <div className={styles.main}>
      <img src={Alejandra.src} alt="Alexandra Cruz" />
    </div>
  );
};

export default Photo;
