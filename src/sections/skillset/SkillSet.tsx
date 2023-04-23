import clsx from 'clsx';
import styles from './SkillSet.module.css';
import { useState } from 'react';
import { SkilLSetIntro } from './components/SkillSetIntro/SkillSetIntro';
import { SkillSetComplementary } from './components/SkillSetComplementary/SkillSetComplementary';
import { SkillSetRole } from './components/SkillSetRole/SkillSetRole';
import { SkillSetDotsList } from './components/SkillSetDotsList/SkillSetDotsList';
import { SkillDescription } from './components/SkillDescription/SkillDescription';

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

      <SkilLSetIntro />

      <div className="divider" />

      <SkillSetRole title="Primary Role: Frontend Engineer">
        These skills are where our hero excels and have been specializing his efforts throughout his journey.<br />
        He has a vast and deep experience and is ready to face any challenges that may appear with expertise.
      </SkillSetRole>

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

          <SkillSetDotsList
            keyBase="Frontend"
            items={[FRONTEND_SKILLS.INTERFACE_BUILD, FRONTEND_SKILLS.DESIGN_SYSTEM, FRONTEND_SKILLS.WEB_VITALS, FRONTEND_SKILLS.MICROFRONTENDS]}
            selected={selectedFrontendSkill}
          />
        </div>

        <p className={styles.skills_descriptionHint} aria-hidden>
          hey! listen! click the icons to read details on skills.
        </p>

        <div className={styles.skills_description}>
          <SkillDescription
            isSelected={selectedFrontendSkill !== FRONTEND_SKILLS.INTERFACE_BUILD}
            iconSrc="assets/icons/diamond.png"
            title="Building Interfaces"
          >
            <p>Creates interfaces with great user experiences to achieve business&apos; goals.</p>
            <p>Uses HTML, CSS and frameworks. Knows both Javascript and Typescript, as well as builds scalable project with React and Angular.</p>
          </SkillDescription>

          <SkillDescription
            isSelected={selectedFrontendSkill !== FRONTEND_SKILLS.DESIGN_SYSTEM}
            iconSrc="assets/icons/book.png"
            title="Design Systems"
          >
            <p>Uses Design Systems to build accessible and consistent interfaces more efficiently.</p>
            <p>Creates Design Systems from scratch following best practices and enhancing teams productivity and delivery quality.</p>
          </SkillDescription>

          <SkillDescription
            isSelected={selectedFrontendSkill !== FRONTEND_SKILLS.WEB_VITALS}
            iconSrc="assets/icons/core.png"
            title="Web Vitals"
          >
            <p>Builds performant Frontends ensuring it has solid SEO and Web Vitals.</p>
            <p>Investigate bottlenecks and enhance the performance of web applications, providing better user experience and leads conversion.</p>
          </SkillDescription>

          <SkillDescription
            isSelected={selectedFrontendSkill !== FRONTEND_SKILLS.MICROFRONTENDS}
            iconSrc="assets/icons/flag.png"
            title="Microfrontends"
          >
            <p>Designs and implements Microfrontends solutions to boost teams productivity.</p>
            <p>Proposes solutions to reduce projects complexity and maintenance costs, while giving teams autonomy and allowing faster releases.</p>
          </SkillDescription>
        </div>
      </div>

      <div className="divider" />

      <SkillSetRole title="Secondary Role: Backend Engineer">
        Though it may not be where the hero excels, a great sage knows his way around with a vast knowledge to face any kind of challenge.<br />
        He has had quite some experience as well and knows where to go when he needs to deepen his knowledge.
      </SkillSetRole>

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

          <SkillSetDotsList
            keyBase="Backend"
            items={[BACKEND_SKILLS.APIS_BUILD, BACKEND_SKILLS.DATABASES, BACKEND_SKILLS.MICROSERVICES, BACKEND_SKILLS.SERVERLESS]}
            selected={selectedBackendSkill}
          />
        </div>

        <p className={styles.skills_descriptionHint} aria-hidden>
          hey! listen! click the icons to read details on skills.
        </p>

        <div className={styles.skills_description}>
          <SkillDescription
            isSelected={selectedBackendSkill !== BACKEND_SKILLS.APIS_BUILD}
            iconSrc="assets/icons/dialog.png"
            title="REST APIs"
          >
            <p>Builds simple and flexible REST APIs to serve web pages contents.</p>
            <p>Creates scalabe APIs, proposing solutions based on the requirements (Authentication, BFFs, Gateways, etc.).</p>
          </SkillDescription>

          <SkillDescription
            isSelected={selectedBackendSkill !== BACKEND_SKILLS.DATABASES}
            iconSrc="assets/icons/egg.png"
            title="Databases"
          >
            <p>Uses databases for storing simple data or large volumes of data.</p>
            <p>Proposes usage of the right tools for the right job (SQL vs NoSQL) and solutions for scalability (Queries optimization, Indexes, Replicas, etc.).</p>
          </SkillDescription>

          <SkillDescription
            isSelected={selectedBackendSkill !== BACKEND_SKILLS.MICROSERVICES}
            iconSrc="assets/icons/balance.png"
            title="Microservices"
          >
            <p>Designs and implements Microservices solutions to boost teams productivity.</p>
            <p>Proposes solutions to reduce projects complexity and maintenance costs, while giving teams autonomy and allowing faster releases.</p>
          </SkillDescription>

          <SkillDescription
            isSelected={selectedBackendSkill !== BACKEND_SKILLS.SERVERLESS}
            iconSrc="assets/icons/portal.png"
            title="Serverless"
          >
            <p>Implements Serverless solutions - when it makes sense - to achieve scalability.</p>
            <p>Designs solutions to significantly reduce infrastructure complexity, maintenance and costs (AWS Lambda, NoSQL, Firebase, etc.).</p>
          </SkillDescription>
        </div>
      </div>

      <div className="divider" />

      <SkillSetComplementary />
    </div>
  );
};
