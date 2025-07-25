import React from "react";
import classes from "./HotNow.module.css";
import bg_pop from "../../assets/images/bg_pop.jpg"

export const items = [
  {
    title: "Instagram",
    text: "Follow us for behind-the-scenes, class clips, and more visual inspiration.",
    icon: "📸",
  },
  {
    title: "Frame Up Strip",
    text: "Explore the hottest sensual dance style that's empowering and expressive.",
    icon: "💃",
  },
  {
    title: "Questions",
    text: "Have doubts? We’ve answered the most common questions from new dancers.",
    icon: "❓",
  },
  {
    title: "Community",
    text: "Join a community that supports movement, expression, and growth together.",
    icon: "🤝",
  },
];

const HotNow = () => {
  return (
    <section className={classes.section} style={{ backgroundImage: `url(${bg_pop})` }}>
      <span className={classes.heading}>Popular sections</span>
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
  );
};

export default HotNow;
