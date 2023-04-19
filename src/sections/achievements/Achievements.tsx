import clsx from 'clsx';
import styles from './Achievements.module.css';
import { Education } from '../education/Education';

export const Achievements = () => {
  return (
    <div id="Achievements" className={clsx(styles.achievements, "container")}>
      <h3>
        <img src="assets/icons/trophy.png" className="icon"  alt="" />
        Achievements
      </h3>

      <p className={styles.achievements__intro}>
        Leo has ventured far and wide and had many experiences along the way, which helped developing who he is today.
      </p>

      <Education />

      <h4>Volunteer Work</h4>

      <dl className={styles.achievements__list}>
        <dt>Engineering Mentoring | July 2019 - Present</dt>
        <dd>
        Mentoring underprivileged folks who desire to learn and/or have a career in Software Engineering, especially those aiming web development.
        </dd>

        <dt>Laboratoria  | August 2020 - October 2021</dt>
        <dd>
          Interview simulation for women graduating in the bootcamp.
          Hosting a Frontend interview simulation and providing accurate feedback for them, helping them reach their first job opportunity.
        </dd>

        <dt>ONG Ação Animal (Animal Protection) | January 2017 - September 2018</dt>
        <dd>
          Development of hotsites for Marketing Campaigns, as well as execution of those campaigns.
          General help in adoption campaigns and taking care of the shelter.
        </dd>
      </dl>
    </div>
  );
};
