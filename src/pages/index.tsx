import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Introduction } from '@/sections/introduction/Introduction';
import { FindMe } from '@/sections/find-me/FindMe';
import { Lore } from '@/sections/lore/Lore';
import { Guilds } from '@/sections/guilds/Guilds';
import { Education } from '@/sections/education/Education';

export default function Home() {
  return (
    <>
      <Head>
        <title>Leonardo Giroto | Portfolio</title>
        <meta name="description" content="Software Engineer Personal Portfolio by Leonardo Soares Giroto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <main className={styles.main}>

        <nav>
          <ul>
            <li>INTRODUCTION</li>
            <li>SKILLSETS</li>
            <li>QUESTS</li>
            <li>LORE</li>
            <li>ACHIEVEMENTS</li>
            <li>GUILDS</li>
          </ul>
        </nav>

        <h1>Leonardo Giroto</h1>

        <p>an ambitious hero whose biggest goal is to change the world, for everyone</p>
        
        <Introduction />

        <div>
          <h3>Character Skillset</h3>

          <p>
            Our hero is a versatile software sage, combining multiple knowledges he has learned throughout his journey.
            <br /><br />
            One of his greatest strenghts is the ability to rapidly learn new skills;
            and in the same way he's devoted to learning, he's passionate about sharing all his knowledge. 
          </p>
        </div>

        <div>
          <h3>Quests</h3>

          <p>
            Our hero has been a part of great adventures since the beggining of his career path.
            <br /><br />
            From the simplest to the harshest, he has committed to many quests, which he proudly displays for exploration! 
          </p>
        </div>

        <Lore />

        <div style={{ marginTop: '60px' }} />

        <div>
          <h3>Achievements</h3>
        </div>

        <Education />

        <div className="divider" />

        <Guilds />

        <div className="divider" />

        <FindMe />
      </main>
    </>
  )
}
