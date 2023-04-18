
import styles from './Introduction.module.css';
import clsx from 'clsx';

export const Introduction = () => {
  return (
    <div id="Introduction" className={styles.introduction}>
      <div className={clsx(styles.introduction__scrollBorder, styles.introduction__topScroll)} />

      <h2 className={styles.introduction__title}>Once upon a time...</h2>

      <div className={clsx("container", styles.introduction__content)}>
        <p className={styles.introduction__text}>
          We all have a hero inside of us.<br />
          And we all have stories about the paths we have choosen and what we have learned from them.
          <br /><br />
          Our hero was born in the lands of Rio de Janeiro. From there he started his journey for knowledge, studying from great masters. Always searching for new quests, life led him to a new land which he is now exploring: São Paulo. He always knew he was destined to take part in great adventures and has always dreamt big.
          <br /><br />
          No job is too big or too hard for him, no matter what lies ahead. He is always thirsty for knowledge and is a very quick learner; learning by others and sharing knowledge are one of the most important values he carries. Passionate about his work, he is always trying to find ways to improve; he knows that even the wisest sage still have something to learn!
          <br /><br />
          One thing that he can't stand is the status quo. Therefore he is always evolved in new adventures, might that be new projects, learning different skillsets or traveling to new places. A hero that once puts something in his head he goes until the end; some would say stubborn, other persistent... Maybe both? 
        </p>

        <img
          className={styles.introduction__image}
          alt="Leo as a druid, wearing a blue robe and a red cape. He is holding a blue spellbook on his right hand and invoking an elemental spell on his left hand. A white cat - his familiar - is next to him."
          src="/assets/images/ColoredCharacterWithGlasses.png"
        />
      </div>

      <div className={clsx(styles.introduction__scrollBorder, styles.introduction__bottomScroll)} />
    </div>
  );
};
