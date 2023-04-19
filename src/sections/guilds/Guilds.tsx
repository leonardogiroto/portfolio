import clsx from 'clsx';
import styles from './Guilds.module.css';

export const Guilds = () => {
  return (
    <div id="Guilds" className={clsx("container", styles.guilds)}>
      <h3>
        <img src="assets/icons/guilds.png" className="icon"  alt="" />
        Guilds
      </h3>

      <p className={styles.guilds__intro}>
        These are some of the causes present on our hero&apos;s life for the last years of his journey.
      </p>

      <ul className={styles.guilds__list}>
        <li className={styles.guilds__listItem}>
          <img src="assets/icons/plus.png" className="icon" alt="" />
          <h5>Animal Protection</h5>
        </li>

        <li className={styles.guilds__listItem}>
          <img src="assets/icons/map.png" className="icon"  alt="" />
          <h5>Traveller</h5>
        </li>

        <li className={styles.guilds__listItem}>
          <img src="assets/icons/lgbt_flag.png" className="icon"  alt="" />
          <h5>LGBT+ Pride</h5>
        </li>

        <li className={styles.guilds__listItem}>
          <img src="assets/icons/war.png" className="icon"  alt="" />
          <h5>Gamer</h5>
        </li>

        <li className={styles.guilds__listItem}>
          <img src="assets/icons/leaf.png" className="icon"  alt="" />
          <h5>Nature Lover</h5>
        </li>

        <li className={styles.guilds__listItem}>
          <img src="assets/icons/feathers.png" className="icon"  alt="" />
          <h5>Hobbist Writer</h5>
        </li>
      </ul>
    </div>
  );
};
