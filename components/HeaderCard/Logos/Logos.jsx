import styles from "../Logos/Logos.module.css";
import instagram from "../../../assests/instagram.svg";
import facebook from "../../../assests/facebook.svg";
import cloud from "../../../assests/cloud.svg";

const Logos = () => {
  return (
    <div className={styles.logos}>
      <img src={instagram.src} alt="instagram-icon" />
      <img src={facebook.src} alt="facebook-icon" />
      <img src={cloud.src} alt="cloud-icon" />
    </div>
  );
};

export default Logos;
