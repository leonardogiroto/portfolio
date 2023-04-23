import clsx from "clsx";
import styles from './SkillSetDotsList.module.css';

type SkillSetDotsListProps = {
  keyBase: string;
  items: Array<number>;
  selected: number;
};

export const SkillSetDotsList = (props: SkillSetDotsListProps) => {
  const { keyBase, items, selected } = props; 

  return (
    <div className={styles.skills__listDots} aria-hidden>
      {items.map((item) => 
        <div
          key={`${keyBase}_${item}`}
          className={clsx(selected === item ? styles.skills__listDotSelected : styles.skills__listDot)}
        />
      )}
    </div>
  )
};
