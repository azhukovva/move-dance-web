import React, { useEffect, useState } from "react";
import classes from "./Main.module.css";

import main from "../../assets/images/main.jpg";
import main3 from "../../assets/images/main3.jpg";
import mobileVideo from "../../assets/videos/video.MP4";
import { items } from "../HotNow/HotNow";

const Main = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        height: !isMobile ? "130vh" : "100vh",
        flexDirection: !isMobile ? "column" : "row",
      }}
      className={classes.container}
    >
      {/* {!isMobile ? (
        <video className={classes.bgMedia} autoPlay loop muted playsInline>
          <source src={mobileVideo} type="video/mp4" />
        </video>
      ) : (
        <img src={main3} alt="" className={classes.bgMedia} />
      )} */}
      <video
        style={{ height: !isMobile ? "130vh" : "100vh" }}
        className={classes.bgMedia}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={mobileVideo} type="video/mp4" />
      </video>
      <div
        style={{ padding: !isMobile ? "38vh 5vw" : "8vh 5vw" }}
        className={classes.textContainer}
      >
        <div className={classes.titleContainer}>
          <span className={classes.subtitle}>Dance Studio in Brno</span>
          <span className={classes.title}>Move</span>
        </div>

        <div className={classes.slogan}>
          <span>Live.</span>
          <span>Love.</span>
          <span>Move.</span>
        </div>
      </div>
      {/* {!isMobile && (
        <section className={classes.section}>
          <div className={classes.grid}>
            {items.map((item, index) => (
              <div key={index} className={classes.card}>
                <div className={classes.cardHeader}>
                  <h3 className={classes.cardTitle}>{item.title}</h3>
                  <div className={classes.iconCircle}>{item.icon}</div>
                </div>

                <p className={classes.cardText}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      )} */}
    </div>
  );
};

export default Main;
