import clsx from 'clsx';
import styles from './SkillListItem.module.css';

type SkillListItemProps = {
  ariaControls: string;
  isSelected: boolean;
  title: string;
  iconSrc: string;
  onSkillClick: () => void;
};

export const SkillListItem = (props: SkillListItemProps) => {
  const { ariaControls, isSelected, title, iconSrc, onSkillClick } = props;

  return (
    <li className={clsx(isSelected && styles['skills__listItem--selected'])}>
      <button
        aria-controls={ariaControls}
        aria-expanded={isSelected}
        onClick={onSkillClick}
        title={title}
      >
        <img src={iconSrc} className="iconShadow" alt="" width="80" height="80" />
      </button>
    </li>
  );
};
