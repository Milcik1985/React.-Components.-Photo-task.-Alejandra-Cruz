import styles from "./Text.module.css";
import Button from "../Button/Button";

const Text = () => {
  return (
    <div className={styles.main}>
      <h2>Alejandra Cruz is a asinger and songwriter from Barcelona, Spain</h2>
      <p>Her new album is available now.</p>
      <Button />
    </div>
  );
};

export default Text;
