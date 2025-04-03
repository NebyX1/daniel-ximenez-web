import React, { useState, useEffect } from 'react';
import styles from '../../../styles/home.module.css';

const Programa = ({ bigImage, smallImage }) => {
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
          alt="Daniel Ximénez - Plataforma de Gobierno" 
          className={styles.image} 
          loading="lazy" 
        />
      </div>
      <a href="/propuestas" className={styles.button}>Nuestras Propuestas</a>
    </section>
  );
};

export default Programa;