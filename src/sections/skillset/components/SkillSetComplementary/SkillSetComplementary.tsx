import styles from './SkillSetComplementary.module.css';

export const SkillSetComplementary = () => {
  return (
    <>
      <h4>Complementary Roles</h4>

      <ul className={styles.skills_complementaryList}>
        <li>Requirements Engineering</li>
        <li>Tech Lead Engineer</li>
        <li>Agile & Scrum</li>
        <li>Technical Writing</li>
        <li>Mentoring</li>
        <li>Observability</li>
      </ul>
    </>
  )
};
