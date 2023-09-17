import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navigation from "../../components/Navigation";
import styles from "./MainPage.module.css"; // Import CSS styles for animations

export default function MainPage() {
  const router = useRouter();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger exit animation when navigating away from the page
    router.events.on("routeChangeStart", () => {
      setAnimate(true);
    });

    // Trigger entrance animation when the page is loaded
    router.events.on("routeChangeComplete", () => {
      setAnimate(false);
    });

    // Clean up event listeners
    return () => {
      router.events.off("routeChangeStart", () => {});
      router.events.off("routeChangeComplete", () => {});
    };
  }, [router]);

  return (
    <div className={styles.mainPage}>
      <div className={`page ${animate ? styles.exit : styles.enter}`}>
        <Navigation />
        <h1>Main Page</h1>
        {/* Add content for your main page */}
      </div>
    </div>
  );
}
