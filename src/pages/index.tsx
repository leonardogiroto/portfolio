import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Introduction } from '@/sections/introduction/Introduction';

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
          <h2>Character Skillset</h2>

          <p>
            Our hero is a versatile software sage, combining multiple knowledges he has learned throughout his journey.
            <br /><br />
            One of his greatest strenghts is the ability to rapidly learn new skills;
            and in the same way he's devoted to learning, he's passionate about sharing all his knowledge. 
          </p>
        </div>

        <div>
          <h2>Quests</h2>

          <p>
            Our hero has been a part of great adventures since the beggining of his career path.
            <br /><br />
            From the simplest to the harshest, he has committed to many quests, which he proudly displays for exploration! 
          </p>
        </div>

        <div>
          <h2>Lore</h2>

          <p>
            Our hero's story as a software sage begins on 2012 when he first started working on the area, while attending university.
            <br /><br />
            And since then he has been continuously falling in love with software engineering and searching for opportunities to learn, accomplish and grow. 
          </p>
        </div>

        <div>
          <h2>Achievements</h2>
        </div>

        <div>
          <h2>Guilds</h2>

          <p>These are some of the causes present on our hero's life for the last years of his journey </p>
        </div>

        <div>
          <h2>How to Find Me</h2>

          <p>
            Leonardo Soares Giroto
            Living in São Paulo, SP - Brasil

            My email is leonardo.giroto@gmail.com &
            you can also find me in LinkedIn .
            Oh, and you can check out my Github !

            Feel free to talk to me,
            I promise I won't jinx you! 
          </p>
        </div>
      </main>
    </>
  )
}
