import React from 'react';
import styles from './HomePage.module.css'; 

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.welcomeText}>
        Welcome to my portfolio!
      </div>
    </div>
  );
};

export default HomePage;
