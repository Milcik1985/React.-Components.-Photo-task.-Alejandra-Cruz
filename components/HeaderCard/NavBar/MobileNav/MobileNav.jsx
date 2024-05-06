import styles from "./MobileNav.module.css";
import BurgerMenu from "../../../../assests/burger.svg";
import instagram from "../../../../assests/instagram.svg";
import facebook from "../../../../assests/facebook.svg";
import cloud from "../../../../assests/cloud.svg";
import { useState } from "react";

const MobileNavBar = () => {
  const [isDispayedMobileMenu, setDisplayMobileMenu] = useState(false);
  const onBurgerMenuClick = () => {
    setDisplayMobileMenu(!isDispayedMobileMenu);
  };
  return (
    <>
      <button className={styles.mobileMenu} onClick={onBurgerMenuClick}>
        <img
          className={styles.burgerMenu}
          src={BurgerMenu.src}
          alt="Burger Menu"
        />
      </button>
      {isDispayedMobileMenu && (
        <nav className={styles.mobileNavigation}>
          <a href="#">About</a>
          <a href="#">Gallery</a>
          <a href="#">Music</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <a href="#">
            <img src={instagram.src} alt="" />
          </a>
          <a href="#">
            <img src={facebook.src} alt="" />
          </a>
          <a href="#">
            <img src={cloud.src} alt="" />
          </a>
        </nav>
      )}
    </>
  );
};

export default MobileNavBar;
