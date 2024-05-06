import styles from "./MainHeader.module.css";
import Photo from "./Photo/Photo";
import Text from "./Text/Text";

const MainHeader = () => {
  return (
    <div className={styles.main}>
      <Photo />
      <Text />
    </div>
  );
};

export default MainHeader;
