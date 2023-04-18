import clsx from 'clsx';
import styles from './Lore.module.css';
import { LoreExperience } from './components/LoreExperience/LoreExperience';
import { LoreTimeline } from './components/LoreTimeline/LoreTimeline';

export const Lore = () => {
  return (
    <div id="Lore" className={styles.lore}>
      <div className={clsx(styles.lore__scrollBorder, styles.lore__topScroll)} />

      <div className={clsx('container', styles.lore__wrapper)}>
        <h2 className={styles.lore__title}>Lore</h2>

        <p className={styles.lore__intro}>
          Our hero's story as a software sage begins on 2012 when he first started working on the area, while attending university.<br />
          It has been 10 years of vast and challenging experiences and since then he has been continuously falling in love with software engineering and searching for opportunities to learn, accomplish and grow. 
        </p>

        <div className={styles.lore__content}>
          <LoreTimeline />
              
          <div className={styles.lore__positions} >
            <LoreExperience
              className="position at2014 at2015 at2016 at2017 at2018 at2019" 
              title="Loft (Startup)"
            >
              <strong>Staff Software Engineer</strong>  |  Sep 2022 - currently (7 months)<br />
              Platform team focusing on scaling Frontend solutions for the Loft Group. Creating a new platform to scale our Design System for multiple brands and technologies. Leading the team in improving our Design System, focusing on productivity, UX and accessibility.<br />
              Maintaining the Frontend monorepo largely used within the Loft company and working on making it available for the Loft Group. Working in the development of micro frontends solutions to improve productivity for developers across the group.
              <br /><br />
              <strong>Senior Software Engineer</strong>  |  Apr 2021 - Sep 2022 (1.5 years)<br />
              Product team taking care of the most strategic products for the company, such as the home details page, creating scalable and engaging experiences, while taking care of SEO and web performance. Growing access and time spent in our marketplace, as well as leads conversions.
              <br /><br />
              <strong>Software Engineer</strong>  |  Apr 2020 - Mar 2021 (1 year)<br />
              Platform team focused on frontend scalability. Improving our Design System and developing tools and content to improve teams observability, productivity and web performance.
              <br /><br />
              <strong>D&I Committee</strong> - Pride at Loft Leadership  |  Oct 2020 - Present (2.5 years)<br />
              Part of the company’s diversity committee and leadership of Pride at Loft group, helping create a diverse and inclusive environment for the LGBTQIA+ community.
            </LoreExperience>

            <div className="scrollDivider" />

            <LoreExperience
              className="position at2014 at2015 at2016 at2017 at2018 at2019" 
              title="TG4 Consulting"
            >
              <strong>Senior Software Engineer</strong>  |  Jun 2014 – Apr 2020<br />
              Full Stack Engineer working on web and mobile solutions for big companies and entrepreneurs.<br />
              Building high performant systems; sales platforms, e-learning, financial management, among others.<br />
              Lead Developer, aiding on team and projects structuring, responsibility delegation and project decisions.<br /> 
              Stack: multiple technologies, mainly: Javascript, Angular, Ionic & C# .Net Core<br />
            </LoreExperience>

            <div className="scrollDivider" />
            
            <LoreExperience
              className="position at2017 at2018 at2019" 
              title="Self Employee"
            >
              <strong>Consultant & Freelancer</strong>  |  Sep 2015 – Dec 2019<br />
              Self Employee Full Stack Engineer working on short term projects, from idealization to software implementation.<br />
              Developing tools to optimize processes and empower entrepreneurs. Management of projects and small teams.<br />
              Stack: multiple technologies, mainly: Javascript, Angular & NodeJS, Ruby on Rails<br />
            </LoreExperience>

            <div className="scrollDivider" />
            
            <LoreExperience
              className="position at2014 at2015 at2016 at2017 at2018 at2019" 
              title="Junior Enterprise PUC-Rio"
            >
              <strong>Consultant & Project Manager</strong>  |  Nov 2012 – May 2014<br />
              Responsible for structuring Business Plans for entrepreneurs and developing Websites for diverse clients.<br />
              As manager, responsible for companie's strategic decisions and managing small teams for both clients' and internal projects.<br />
            </LoreExperience>
          </div>
        </div>
      </div>

      <div className={clsx(styles.lore__scrollBorder, styles.lore__bottomScroll)} />
    </div>
  );
};
