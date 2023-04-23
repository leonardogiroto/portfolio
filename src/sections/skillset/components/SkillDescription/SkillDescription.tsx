import clsx from 'clsx';
import styles from './SkillDescription.module.css';
import { PropsWithChildren } from 'react';

type SkillDescriptionProps = {
  isSelected: boolean;
  iconSrc: string;
  title: string;
};

export const SkillDescription = (props: PropsWithChildren<SkillDescriptionProps>) => {
  const { isSelected, iconSrc, title, children } = props;

  return (
    <div className={clsx(styles.skills_descriptionContent, isSelected && styles.skills_descriptionHidden)}>
      <h5>
        <img src={iconSrc} className="icon" alt="" width="50" height="50" />
        {title}
      </h5>
      {children}
    </div>
  );
};
