import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Introduction } from '@/sections/introduction/Introduction';
import { FindMe } from '@/sections/find-me/FindMe';
import { Lore } from '@/sections/lore/Lore';
import { Guilds } from '@/sections/guilds/Guilds';
import { Header } from '@/sections/header/Header';
import { Achievements } from '@/sections/achievements/Achievements';
import { SkillSet } from '@/sections/skillset/SkillSet';
import { Quests } from '@/sections/quests/Quests';

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
        <Header />
        
        <Introduction />

        <SkillSet />

        <div style={{ marginTop: '60px' }} />

        <Lore />

        <div style={{ marginTop: '60px' }} />

        <Quests />

        <div className="divider" />

        <Achievements />

        <div className="divider" />

        <Guilds />

        <div className="divider" />

        <FindMe />
      </main>
    </>
  )
}
