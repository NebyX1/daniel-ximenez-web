import React, { useState, useEffect } from 'react';
import styles from '../../../styles/home.module.css';

const Header = ({ bigImage, smallImage }) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 430 : false
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 430);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <section className={`${styles.section} mt-14 lg:mt-28 md:mt-32`}>
      <div className={styles.imageContainer}>
        <img 
          src={isMobile ? smallImage : bigImage} 
          alt="Daniel Ximénez - Header" 
          className={styles.image} 
          loading="lazy" 
        />
      </div>
      <a href="/bio" className={styles.button}>Conocé a Daniel</a>
    </section>
  );
};

export default Header;