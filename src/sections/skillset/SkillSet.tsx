import clsx from 'clsx';
import styles from './SkillSet.module.css';
import { useState } from 'react';

enum BACKEND_SKILLS {
  APIS_BUILD,
  DATABASES,
  MICROSERVICES,
  SERVERLESS,
}

enum FRONTEND_SKILLS {
  INTERFACE_BUILD,
  DESIGN_SYSTEM,
  WEB_VITALS,
  MICROFRONTENDS,
}

export const SkillSet = () => {
  const [selectedFrontendSkill, setSelectedFrontendSkill] = useState<FRONTEND_SKILLS>(FRONTEND_SKILLS.INTERFACE_BUILD);
  const [selectedBackendSkill, setSelectedBackendSkill] = useState<BACKEND_SKILLS>(BACKEND_SKILLS.APIS_BUILD);
  
  return (
    <div id="SkillSet" className={clsx("container", styles.skills)}>
      <h3>Character Skillset</h3>

      <p className={styles.skills__intro}>
        Our hero is a versatile software sage, combining multiple knowledges he has learned throughout his journey.<br />
        One of his greatest strenghts is the ability to rapidly learn new skills;<br />
        and in the same way he's devoted to learning, he's passionate about sharing his knowledge. 
      </p>

      <div className="divider" />

      <h4>Primary Role: Frontend Engineer</h4>

      <p className={styles.skills__roleIntro}>
        These skill's are where our hero excels and have been specializing his efforts throughout his journey.<br />
        He has a vast and deep experience and is ready to face any challenges that may appear with expertise.
      </p>

      <div className={styles.skills__selection}>
        <div>
          <ul className={styles.skills__list}>
            <li className={clsx(selectedFrontendSkill === FRONTEND_SKILLS.INTERFACE_BUILD && styles['skills__listItem--selected'])}>
              <button onClick={() => setSelectedFrontendSkill(FRONTEND_SKILLS.INTERFACE_BUILD)}>
                <img src="assets/icons/diamond.svg" className="iconShadow" alt="" />
              </button>
            </li>
            <li className={clsx(selectedFrontendSkill === FRONTEND_SKILLS.DESIGN_SYSTEM && styles['skills__listItem--selected'])}>
              <button onClick={() => setSelectedFrontendSkill(FRONTEND_SKILLS.DESIGN_SYSTEM)}>
                <img src="assets/icons/book.svg" className="iconShadow" alt="" />
              </button>
            </li>
            <li className={clsx(selectedFrontendSkill === FRONTEND_SKILLS.WEB_VITALS && styles['skills__listItem--selected'])}>
              <button onClick={() => setSelectedFrontendSkill(FRONTEND_SKILLS.WEB_VITALS)}>
                <img src="assets/icons/core.svg" className="iconShadow" alt="" />
              </button>
            </li>
            <li className={clsx(selectedFrontendSkill === FRONTEND_SKILLS.MICROFRONTENDS && styles['skills__listItem--selected'])}>
              <button onClick={() => setSelectedFrontendSkill(FRONTEND_SKILLS.MICROFRONTENDS)}>
                <img src="assets/icons/flag.svg" className="iconShadow" alt="" />
              </button>
            </li>
          </ul>
          
          <div className={styles.skills__listDots} aria-hidden>
            <div className={clsx(selectedFrontendSkill === FRONTEND_SKILLS.INTERFACE_BUILD ? styles.skills__listDotSelected : styles.skills__listDot)} />
            <div className={clsx(selectedFrontendSkill === FRONTEND_SKILLS.DESIGN_SYSTEM ? styles.skills__listDotSelected : styles.skills__listDot)} />
            <div className={clsx(selectedFrontendSkill === FRONTEND_SKILLS.WEB_VITALS ? styles.skills__listDotSelected : styles.skills__listDot)} />
            <div className={clsx(selectedFrontendSkill === FRONTEND_SKILLS.MICROFRONTENDS ? styles.skills__listDotSelected : styles.skills__listDot)} />
          </div>
        </div>

        <div className={styles.skills_description}>
          <div className={clsx(selectedFrontendSkill !== FRONTEND_SKILLS.INTERFACE_BUILD && styles.skills_descriptionHidden)}>
            <h5>
              <img src="assets/icons/diamond.png" className="icon" alt="" />
              Building Interfaces
            </h5>
            <p>Creates interfaces with great user experiences to achieve business' goals.</p>
            <p>Uses HTML, CSS and frameworks. Knows both Javascript and Typescript, as well as builds scalable project with React and Angular.</p>
          </div>

          <div className={clsx(selectedFrontendSkill !== FRONTEND_SKILLS.DESIGN_SYSTEM && styles.skills_descriptionHidden)}>
            <h5>
              <img src="assets/icons/book.png" className="icon" alt="" />
              Design Systems
            </h5>
            <p>Creates interfaces with great user experiences to achieve business' goals.</p>
            <p>Uses HTML, CSS and frameworks. Knows both Javascript and Typescript, as well as builds scalable project with React and Angular.</p>
          </div>
          
          <div className={clsx(selectedFrontendSkill !== FRONTEND_SKILLS.WEB_VITALS && styles.skills_descriptionHidden)}>
            <h5>
              <img src="assets/icons/core.png" className="icon" alt="" />
              Web Vitals
            </h5>
            <p>Creates interfaces with great user experiences to achieve business' goals.</p>
            <p>Uses HTML, CSS and frameworks. Knows both Javascript and Typescript, as well as builds scalable project with React and Angular.</p>
          </div>

          <div className={clsx(selectedFrontendSkill !== FRONTEND_SKILLS.MICROFRONTENDS && styles.skills_descriptionHidden)}>
            <h5>
              <img src="assets/icons/flag.png" className="icon" alt="" />
              Microfrontends
            </h5>
            <p>Creates interfaces with great user experiences to achieve business' goals.</p>
            <p>Uses HTML, CSS and frameworks. Knows both Javascript and Typescript, as well as builds scalable project with React and Angular.</p>
          </div>
        </div>
      </div>

      <div className="divider" />

      <h4>Secondary Role: Backend Engineer</h4>

      <p className={styles.skills__roleIntro}>
        Though it may not be where the hero excels, a great sage needs to know their way around and gather a vast knowledge in order to face any challenge.<br />
        He has had quite some experience as well and knows where to go when he needs to deepen his knowledge on any subject.
      </p>

      <div className={styles.skills__selection}>
        <div>
          <ul className={styles.skills__list}>
            <li className={clsx(selectedBackendSkill === BACKEND_SKILLS.APIS_BUILD && styles['skills__listItem--selected'])}>
              <button onClick={() => setSelectedBackendSkill(BACKEND_SKILLS.APIS_BUILD)}>
                <img src="assets/icons/dialog.svg" className="iconShadow" alt="" />
              </button>
            </li>
            <li className={clsx(selectedBackendSkill === BACKEND_SKILLS.DATABASES && styles['skills__listItem--selected'])}>
              <button onClick={() => setSelectedBackendSkill(BACKEND_SKILLS.DATABASES)}>
                <img src="assets/icons/egg.svg" className="iconShadow" alt="" />
              </button>
            </li>
            <li className={clsx(selectedBackendSkill === BACKEND_SKILLS.MICROSERVICES && styles['skills__listItem--selected'])}>
              <button onClick={() => setSelectedBackendSkill(BACKEND_SKILLS.MICROSERVICES)}>
                <img src="assets/icons/balance.svg" className="iconShadow" alt="" />
              </button>
            </li>
            <li className={clsx(selectedBackendSkill === BACKEND_SKILLS.SERVERLESS && styles['skills__listItem--selected'])}>
              <button onClick={() => setSelectedBackendSkill(BACKEND_SKILLS.SERVERLESS)}>
                <img src="assets/icons/portal.svg" className="iconShadow" alt="" />
              </button>
            </li>
          </ul>
          
          <div className={styles.skills__listDots} aria-hidden>
            <div className={clsx(selectedBackendSkill === BACKEND_SKILLS.APIS_BUILD ? styles.skills__listDotSelected : styles.skills__listDot)} />
            <div className={clsx(selectedBackendSkill === BACKEND_SKILLS.DATABASES ? styles.skills__listDotSelected : styles.skills__listDot)} />
            <div className={clsx(selectedBackendSkill === BACKEND_SKILLS.MICROSERVICES ? styles.skills__listDotSelected : styles.skills__listDot)} />
            <div className={clsx(selectedBackendSkill === BACKEND_SKILLS.SERVERLESS ? styles.skills__listDotSelected : styles.skills__listDot)} />
          </div>
        </div>

        <div className={styles.skills_description}>
          <div className={clsx(selectedBackendSkill !== BACKEND_SKILLS.APIS_BUILD && styles.skills_descriptionHidden)}>
            <h5>
              <img src="assets/icons/dialog.png" className="icon" alt="" />
              REST APIs
            </h5>
            <p>Creates interfaces with great user experiences to achieve business' goals.</p>
            <p>Uses HTML, CSS and frameworks. Knows both Javascript and Typescript, as well as builds scalable project with React and Angular.</p>
          </div>

          <div className={clsx(selectedBackendSkill !== BACKEND_SKILLS.DATABASES && styles.skills_descriptionHidden)}>
            <h5>
              <img src="assets/icons/egg.png" className="icon" alt="" />
              Databases
            </h5>
            <p>Creates interfaces with great user experiences to achieve business' goals.</p>
            <p>Uses HTML, CSS and frameworks. Knows both Javascript and Typescript, as well as builds scalable project with React and Angular.</p>
          </div>

          <div className={clsx(selectedBackendSkill !== BACKEND_SKILLS.MICROSERVICES && styles.skills_descriptionHidden)}>
            <h5>
              <img src="assets/icons/balance.png" className="icon" alt="" />
              Microservices
            </h5>
            <p>Creates interfaces with great user experiences to achieve business' goals.</p>
            <p>Uses HTML, CSS and frameworks. Knows both Javascript and Typescript, as well as builds scalable project with React and Angular.</p>
          </div>

          <div className={clsx(selectedBackendSkill !== BACKEND_SKILLS.SERVERLESS && styles.skills_descriptionHidden)}>
            <h5>
              <img src="assets/icons/portal.png" className="icon" alt="" />
              Serverless
            </h5>
            <p>Creates interfaces with great user experiences to achieve business' goals.</p>
            <p>Uses HTML, CSS and frameworks. Knows both Javascript and Typescript, as well as builds scalable project with React and Angular.</p>
          </div>
        </div>
      </div>

      <div className="divider" />

      <h4>Complementary Roles</h4>

      <ul className={styles.skills_complementaryList}>
        <li>Requirements Engineering</li>
        <li>Observability</li>
        <li>Tech Lead Engineer</li>
        <li>Agile & Scrum</li>
        <li>Technical Writing</li>
        <li>Mentoring</li>
      </ul>
    </div>
  );
};
