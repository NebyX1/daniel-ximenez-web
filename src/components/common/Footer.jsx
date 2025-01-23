import { useState, useEffect } from 'react';
import BigFooter from './footer/BigFooter';
import SmallFooter from './footer/SmallFooter';

const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isSmallScreen ? <SmallFooter /> : <BigFooter />}
    </>
  );
};

export default Footer;