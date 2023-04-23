import styles from './SkillSetRole.module.css';
import { PropsWithChildren } from "react";

type SkillSetRoleProps = {
  title: string;
};

export const SkillSetRole = (props: PropsWithChildren<SkillSetRoleProps>) => {
  const { title, children } = props;

  return (
    <>
      <h4>{title}</h4>

      <p className={styles.skills__roleIntro}>
        {children}
      </p>
    </>
  );
};
