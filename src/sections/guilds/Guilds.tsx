import clsx from 'clsx';
import styles from './Guilds.module.css';

export const Guilds = () => {
  return (
    <div id="Guilds" className={clsx("container", styles.guilds)}>
      <h3>
        <img src="assets/icons/guilds.png" className="icon" alt="" width="50" height="50" />
        Guilds
      </h3>

      <p className={styles.guilds__intro}>
        These are some of the causes present on our hero&apos;s life for the last years of his journey.
      </p>

      <ul className={styles.guilds__list}>
        <li className={styles.guilds__listItem}>
          <img src="assets/icons/plus.png" className="icon" alt="" width="50" height="50" />
          <p>Animal Protection</p>
        </li>

        <li className={styles.guilds__listItem}>
          <img src="assets/icons/map.png" className="icon"  alt="" width="50" height="50" />
          <p>Traveller</p>
        </li>

        <li className={styles.guilds__listItem}>
          <img src="assets/icons/lgbt_flag.png" className="icon"  alt="" width="50" height="50" />
          <p>LGBT+ Pride</p>
        </li>

        <li className={styles.guilds__listItem}>
          <img src="assets/icons/war.png" className="icon"  alt="" width="50" height="50" />
          <p>Gamer</p>
        </li>

        <li className={styles.guilds__listItem}>
          <img src="assets/icons/leaf.png" className="icon"  alt="" width="50" height="50" />
          <p>Nature Lover</p>
        </li>

        <li className={styles.guilds__listItem}>
          <img src="assets/icons/feathers.png" className="icon"  alt="" width="50" height="50" />
          <p>Hobbist Writer</p>
        </li>
      </ul>
    </div>
  );
};
