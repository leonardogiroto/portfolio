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
          Our hero's story as a software sage begins on 2012 when he first started working in the area, while attending engineering university.
          <br />
          <br className="showSm" />
          It has been years of vast and challenging experiences and he has been continuously falling in love with software engineering and searching for opportunities to learn, accomplish and grow. 
        </p>

        <div className={styles.lore__content}>
          <LoreTimeline />
              
          <div className={styles.lore__positions} >
            <LoreExperience title="Loft (Startup)">
              <strong>Staff Software Engineer</strong>  |  Sep 2022 - currently<br />
              Platform team focusing on scaling Frontend solutions for the Loft Group. Creating a new platform to scale our Design System for multiple brands and technologies. Leading the team in improving our Design System, focusing on productivity, UX and accessibility.<br />
              Maintaining the Frontend monorepo largely used within the Loft company and working on making it available for the Loft Group. Working in the development of micro frontends solutions to improve productivity for developers across the group.
              <br /><br />
              <strong>Senior Software Engineer</strong>  |  Apr 2021 - Sep 2022<br />
              Product team taking care of the most strategic products for the company, such as the home details page, creating scalable and engaging experiences, while taking care of SEO and web performance. Growing access and time spent in our marketplace, as well as leads conversions.
              <br /><br />
              <strong>Software Engineer</strong>  |  Apr 2020 - Mar 2021<br />
              Platform team focused on frontend scalability. Improving our Design System and developing tools and content to improve teams observability, productivity and web performance.
              <br /><br />
              <strong>D&I Committee</strong> - Pride at Loft Leadership<br />
              Leadership of Pride at Loft diversity committee, helping create a diverse and inclusive environment for the LGBTQIA+ community.
            </LoreExperience>

            <div className="scrollDivider" />

            <LoreExperience title="TG4 Consulting">
              <strong>Senior Software Engineer</strong>  |  Jun 2014 – Apr 2020<br />
              Full Stack Engineer on a software house working on web and mobile solutions for big companies and entrepreneurs.<br />
              The stack includes multiple technologies, according to the clients' needs.<br />
              Building high performant systems; sales platforms, e-learning, financial management, among others.<br />
              Lead Developer, aiding on team and projects structuring and project decisions.<br /><br />
                ● Senior Full Stack Engineer | Jan 2019 - Apr 2020<br />
                ● Full Stack Engineer | Jul 2016 - Jan 2019<br />
                ● Software Engineer Intern | Jul 2014 - Jul 2016
            </LoreExperience>

            <div className="scrollDivider" />
            
            <LoreExperience title="Self Employee">
              <strong>Consultant & Freelancer</strong>  |  Sep 2015 – Dec 2022<br />
              Self Employee Full Stack Engineer working on short term projects, from idealization to software implementation.<br />
              Developing tools to optimize processes and empower entrepreneurs. Management of projects and small teams.
            </LoreExperience>

            <div className="scrollDivider" />
            
            <LoreExperience title="Junior Enterprise PUC-Rio">
              <strong>Consultant & Manager</strong>  |  Nov 2012 – May 2014<br />
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
