import clsx from "clsx";
import styles from './Quests.module.css';

export const Quests = () => {
  return (
    <div id="Quests" className={clsx("container", styles.quests)}>
      <h3>Quests</h3>

      <p>
        Our hero has been a part of great adventures since the beggining of his career path.<br />
        From the simplest to the harshest, he has committed to many quests, which he proudly displays for exploration! 
      </p>

      <ul className={styles.quests__list}>
        <li>
          <img src="assets/icons/scroll.png" className="icon" alt="" />
          Portfolio
        </li>
        <li>
          <img src="assets/icons/scroll.png" className="icon" alt="" />
          Portfolio
        </li>
        <li>
          <img src="assets/icons/scroll.png" className="icon" alt="" />
          Portfolio
        </li>
        <li>
          <img src="assets/icons/scroll.png" className="icon" alt="" />
          Portfolio
        </li>
        <li>
          <img src="assets/icons/scroll.png" className="icon" alt="" />
          Portfolio
        </li>
        <li>
          <img src="assets/icons/scroll.png" className="icon" alt="" />
          Portfolio
        </li>
        <li>
          <img src="assets/icons/scroll.png" className="icon" alt="" />
          Portfolio
        </li>
        <li>
          <img src="assets/icons/scroll.png" className="icon" alt="" />
          Portfolio
        </li>
        <li>
          <img src="assets/icons/scroll.png" className="icon" alt="" />
          Portfolio
        </li>
        <li>
          <img src="assets/icons/scroll.png" className="icon" alt="" />
          Portfolio
        </li>
        <li>
          <img src="assets/icons/scroll.png" className="icon" alt="" />
          Portfolio
        </li>
        <li>
          <img src="assets/icons/scroll.png" className="icon" alt="" />
          Portfolio
        </li>
        <li>
          <img src="assets/icons/scroll.png" className="icon" alt="" />
          Portfolio
        </li>
        <li>
          <img src="assets/icons/scroll.png" className="icon" alt="" />
          Portfolio
        </li>
        <li>
          <img src="assets/icons/scroll.png" className="icon" alt="" />
          Portfolio
        </li>
        <li>
          <img src="assets/icons/scroll.png" className="icon" alt="" />
          Portfolio
        </li>
      </ul>

      <p className={styles.quests__tip}>
        hey! listen!<br />
        click on the scrolls to read about the projects! 
      </p>
    </div>
  );
};
