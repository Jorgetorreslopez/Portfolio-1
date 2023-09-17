import Header from "../../components/Header/Header";
import styles from "./MainPage.module.css";
import SpaceShip from "../../components/Spaceship/Spaceship";

export default function MainPage() {
  return (
    <div className={styles.mainPage}>
      <div>
        <Header />
      </div>
      <SpaceShip />
    </div>
  );
}
