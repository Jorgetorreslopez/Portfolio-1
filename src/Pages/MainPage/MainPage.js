import Header from "../../components/Header/Header"
import styles from "./MainPage.module.css"; // Import CSS styles for animations

export default function MainPage() {

  return (
    <div className={styles.mainPage}>
      <div>
        <Header />
      </div>
    </div>
  );
}
