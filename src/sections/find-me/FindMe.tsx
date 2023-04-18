import clsx from 'clsx';
import styles from './FindMe.module.css';

export const FindMe = () => {
  return (
    <div id="FindMe" className={clsx('container', styles.findMe)}>
      <h3>
        <img className="icon" src="/assets/icons/letter.png" alt="" />
        How to Find Me
      </h3>

      <div className={styles.findMe__content}>
        <img
          className={styles.findMe__profilePicture}
          alt="Leo selfie, smiling next to a watefall, surrounded by rocks, flowers and a clean sky"
          src="/assets/images/ProfilePicture.png"
        />

        <p>
          <span className={styles.findMe__highlight}>Leonardo Soares Giroto</span><br />
          São Paulo, SP - Brasil (GMT -3)
          <br /><br />
  
          My email is <span className={styles.findMe__highlight}>leonardo.giroto@gmail.com</span> &<br />
          you can also find me in&nbsp;
          <a
            className={styles.findMe__highlight}
            href="https://www.linkedin.com/in/leonardo-giroto-aa8ba879/"
            target="_blank"
          >
            LinkedIn
          </a>.
  
          <br /><br />
          Feel free to talk to me,<br />
          I promise I won't jinx you! 
        </p>
      </div>
    </div>
  );
};
