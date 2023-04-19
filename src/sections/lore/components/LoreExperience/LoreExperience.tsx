import clsx from "clsx";
import styles from './LoreExperience.module.css';
import { PropsWithChildren } from "react";

type LoreExperienceProps = {
  className?: string;
  title: string;
};

export const LoreExperience = (props: PropsWithChildren<LoreExperienceProps>) => {
  const { className = '', title, children } = props;

  return (
    <div className={clsx(styles.position, className)}>
      <h4 className={styles.position__title}>{title}</h4>

      <p className={styles.position__text}>
        {children}
      </p>
    </div>
  );
};
