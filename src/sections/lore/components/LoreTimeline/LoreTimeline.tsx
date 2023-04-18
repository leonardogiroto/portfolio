import clsx from 'clsx';
import styles from './LoreTimeline.module.css';

export const LoreTimeline = () => {
  return (
    <div className={styles.timeline}>
      <ol className={styles.timeline__years}>
        <li>2023</li>
        <li>2022</li>
        <li>2021</li>
        <li>2020</li>
        <li>2019</li>
        <li>2018</li>
        <li>2017</li>
        <li>2016</li>
        <li>2015</li>
        <li>2014</li>
        <li>2013</li>
      </ol>

      <div className={styles.timeline__line}>
        <div className={clsx(styles.timeline__dot, styles.timeline__firstDot)} ></div>
        <div className={styles.timeline__dot} ></div>
        <div className={styles.timeline__dot} ></div>
        <div className={styles.timeline__dot} ></div>
        <div className={styles.timeline__dot} ></div>
        <div className={styles.timeline__dot} ></div>
        <div className={styles.timeline__dot} ></div>
        <div className={styles.timeline__dot} ></div>
        <div className={styles.timeline__dot} ></div>
        <div className={styles.timeline__dot} ></div>
        <div className={styles.timeline__dot} ></div>
      </div>
    </div>
  );
};
