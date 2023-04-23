import styles from './SkillSetIntro.module.css';

export const SkilLSetIntro = () => {
  return (
    <div className={styles.skills__intro}>
      <p>
        Our hero is a versatile software sage, combining knowledges he has learned throughout his journey.
      </p>

      <p className={styles.skills__intro}>
        One of his greatest strenghts is the ability to rapidly learn any new skills;
        <br className="hideSm" />
        and in the same way he is devoted to learning, he is passionate about sharing his knowledge. 
      </p>
    </div>
  );
};
