import clsx from 'clsx';
import styles from './Education.module.css';

export const Education = () => {
  return (
    <div id="Education" className={clsx("container", styles.education)}>
      <div className={styles.education__dialects}>
        <div className={styles.education__dialect}>
          <span className={styles.education__dialectAbbreviation}>
            PT
          </span>
          <p>Portuguese</p>
          <p>NATIVE</p>
        </div>

        <div className={styles.education__dialect}>
          <span className={styles.education__dialectAbbreviation}>
            EN
          </span>
          <p>English</p>
          <p>FLUENT - C2</p>
        </div>

        <div className={styles.education__dialect}>
          <span className={styles.education__dialectAbbreviation}>
            ES
          </span>
          <p>Spanish</p>
          <p>VANTAGE - B2</p>
        </div>
      </div>

      <div className={styles.education__listing}>
        <div className={styles.education__university}>
          <h4>Computer Engineering</h4>
          <p>
            PUC-RJ (Pontifícia Universidade Católica - RJ)<br />
            <span>january 2012 - july 2017</span><br />
            <br />
            _ Bachelor in Computer Engineering<br />
            _ Minor in Entrepreneurship<br />
            _ Scholarship obtained in entry exame
          </p>
        </div>

        <div className={styles.education__studies}>
          <h4>Recent Certifications & Studies</h4>
          <ul>
            <li>
              Accessibility: How to Design for All | mar 2023
            </li>
            <li>
              HCI: The Foundations of UX Design | sep 2022
            </li>
            <li>
              Building Micro-Frontends (O&apos;Reilly)<br />
            </li>
            <li>
              The Ideal Team Player (Patrick Lencioni)<br />
            </li>
            <li>
              Staff Engineer (Will Larson)<br />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
