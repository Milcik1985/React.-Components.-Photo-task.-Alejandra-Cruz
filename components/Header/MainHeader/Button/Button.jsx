import styles from "./Button.module.css";

const Button = () => {
  return (
    <div className={styles.main}>
      <button className={styles.btn}>Listen Now</button>
    </div>
  );
};

export default Button;
