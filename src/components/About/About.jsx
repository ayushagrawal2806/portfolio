import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              Hello! I'm Ayush, a passionate Bachelor of Technology in Department of Computer Science and Engineering student based in India. I find joy in creating digital wonders that come to life on the internet. As a developer, I specialize in crafting exceptional websites and web applications that offer intuitive, pixel-perfect user interfaces.

In other words, I'm dedicated to building digital experiences that not only function flawlessly but also delight users with their simplicity and elegance. Let's bring your ideas to life and make an impact in the online world together!
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
