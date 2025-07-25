import React, { useEffect, useRef, useState } from "react";
import classes from "./Main.module.css";
import mobileVideo from "../../assets/videos/video.mp4";

const Main = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => {
        console.warn("Autoplay prevented:", err);
      });
    }
  }, []);

  return (
    <div
      style={{
        height: !isMobile ? "130vh" : "100vh",
        flexDirection: !isMobile ? "column" : "row",
      }}
      className={classes.container}
    >
      <video
      ref={videoRef}
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
