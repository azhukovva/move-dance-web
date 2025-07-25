import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header className={classes.header}>
      {isMobile ? (
        <div className={classes.mobileTitle}>
          <span>Brno, Czech Republic</span>
          <span>Move</span>
        </div>
      ) : (
        <>
          <div className={classes.address}>Brno, Czech Republic</div>
          <nav className={classes.nav}>
            <a href="#movements" className={classes.link}>
              Movements
            </a>
            <a href="#team" className={classes.link}>
              Our Team
            </a>
            <a href="#schedule" className={classes.link}>
              Schedule
            </a>
            <a href="#contacts" className={classes.link}>
              Contacts
            </a>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
