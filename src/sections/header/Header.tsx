import styles from './Header.module.css';

export const Header = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#Introduction" >
              INTRODUCTION
            </a>
          </li>

          <li>
            <a href="#SkillSet" >
              SKILLSET
            </a>
          </li>

          <li>
            <a href="#Quests" >
              QUESTS
            </a>
          </li>

          <li>
            <a href="#Lore" >
              LORE
            </a>
          </li>

          <li>
            <a href="#Achievements" >
              ACHIEVEMENTS
            </a>
          </li>

          <li>
            <a href="#Guilds" >
              GUILDS
            </a>
          </li>

          <li>
            <a href="#FindMe" >
              FIND ME
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.cta}>
        <h1>
          Leonardo&nbsp;
          <br className="showSm" />
          Giroto
        </h1>
        <p>an ambitious hero whose goal is to change the world, for everyone</p>
        <img alt="" src="/assets/images/TopDivider.png" />
      </div>
    </>
  );
};
