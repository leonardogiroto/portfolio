import clsx from "clsx";
import styles from './Quests.module.css';
import * as Dialog from "@radix-ui/react-dialog";
import { PortfolioQuest } from "./projects/PortfolioQuest";
import { useState } from "react";
import { ProseekQuest } from "./projects/ProseekQuest";
import { ClubPetQuest } from "./projects/ClubPetQuest";
import { EndoviewQuest } from "./projects/EndoviewQuest";
import { LSWorksQuest } from "./projects/LSWorksQuest";
import { YouBurgerQuest } from "./projects/YouBurgerQuest";
import { QualicorpQuest } from "./projects/QualicorpQuest";
import { MicrofrontendsQuest } from "./projects/MicrofrontendsQuest";
import { CopanPlatformQuest } from "./projects/CopanPlatformQuest";
import { InterviewRevampQuest } from "./projects/InterviewRevampQuest";
import { LegacyAPIQuest } from "./projects/LegacyAPIQuest";
import { LoftMarketplaceQuest } from "./projects/LoftMarketplace";

enum QUESTS {
  PORTFOLIO = 'Portfolio (2023)',
  MICROFRONTENDS = 'Microfrontends: Legacy Projects (2023)',
  COPAN_PLATFORM = 'Copan Platform (2022)',
  INTERVIEW_REVAMP = 'Interviews Revamp (2022)',
  LEGACY_API = 'Legacy API (2021)',
  LOFT_MARKETPLACE = 'Loft Marketplace (2021)',
  PROSEEK = 'ProSeek (2019)',
  LSWORKS = 'LS Works (2018)',
  QUALICORP = 'Qualicorp Realtors App (2018)',
  ENDOVIEW = 'Endoview (2017)',
  CLUBPET = 'ClubPet RJ (2017)',
  YOUBURGER = 'YouBurger (2015)',
};

const QUESTS_MAP = {
  [QUESTS.PORTFOLIO]: <PortfolioQuest />,
  [QUESTS.MICROFRONTENDS]: <MicrofrontendsQuest />,
  [QUESTS.COPAN_PLATFORM]: <CopanPlatformQuest />,
  [QUESTS.INTERVIEW_REVAMP]: <InterviewRevampQuest />,
  [QUESTS.LEGACY_API]: <LegacyAPIQuest />,
  [QUESTS.LOFT_MARKETPLACE]: <LoftMarketplaceQuest />,
  [QUESTS.PROSEEK]: <ProseekQuest />,
  [QUESTS.LSWORKS]: <LSWorksQuest />,
  [QUESTS.ENDOVIEW]: <EndoviewQuest />,
  [QUESTS.QUALICORP]: <QualicorpQuest />,
  [QUESTS.CLUBPET]: <ClubPetQuest />,
  [QUESTS.YOUBURGER]: <YouBurgerQuest />,
};

type QuestScrollProps = {
  title: string;
  onClick: () => void;
};

const QuestScroll = (props: QuestScrollProps) => {
  const { title, onClick } = props;
  return (
    <Dialog.Trigger asChild>
      <button onClick={onClick}>
        <img src="assets/icons/scroll.png" className="icon" alt="" width="80" height="80" />
        {title}
      </button>
    </Dialog.Trigger>
  );
};

export const Quests = () => {
  const [selectedQuest, setSelectedQuest] = useState<QUESTS>();

  const openChange = (isOpen: boolean) => {
    if (!isOpen)
      setSelectedQuest(undefined);
  }

  return (
    <div id="Quests" className={clsx("container", styles.quests)}>
      <h3>Quests</h3>

      <p>
        Our hero has been a part of great adventures since the beggining of his career path.<br />
        From the simplest to the harshest, he has committed to many quests, which he proudly displays for exploration! 
      </p>

      <Dialog.Root open={selectedQuest !== undefined} onOpenChange={openChange}>
        <ul className={styles.quests__list}>
          <li>
            <QuestScroll title="Portfolio" onClick={() => setSelectedQuest(QUESTS.PORTFOLIO)} />
          </li>
          <li>
            <QuestScroll title="Microfrontends: Legacy Projects" onClick={() => setSelectedQuest(QUESTS.MICROFRONTENDS)} />
          </li>
          <li>
            <QuestScroll title="Copan Platform" onClick={() => setSelectedQuest(QUESTS.COPAN_PLATFORM)} />
          </li>
          <li>
            <QuestScroll title="Interviews Revamp" onClick={() => setSelectedQuest(QUESTS.INTERVIEW_REVAMP)} />
          </li>
          <li>
            <QuestScroll title="Legacy API Shutdown" onClick={() => setSelectedQuest(QUESTS.LEGACY_API)} />
          </li>
          <li>
            <QuestScroll title="Loft Marketplace" onClick={() => setSelectedQuest(QUESTS.LOFT_MARKETPLACE)} />
          </li>
          <li>
            <QuestScroll title="ProSeek E-Learning" onClick={() => setSelectedQuest(QUESTS.PROSEEK)} />
          </li>
          <li>
            <QuestScroll title="Qualicorp Realtors App" onClick={() => setSelectedQuest(QUESTS.QUALICORP)} />
          </li>
          <li>
            <QuestScroll title="LS Works" onClick={() => setSelectedQuest(QUESTS.LSWORKS)} />
          </li>
          <li>
            <QuestScroll title="ClubPet RJ" onClick={() => setSelectedQuest(QUESTS.CLUBPET)} />
          </li>
          <li>
            <QuestScroll title="Endoview" onClick={() => setSelectedQuest(QUESTS.ENDOVIEW)} />
          </li>
          <li>
            <QuestScroll title="YouBurger" onClick={() => setSelectedQuest(QUESTS.YOUBURGER)} />
          </li>
        </ul>

        <p className={styles.quests__tip}>
          hey! listen!<br />
          click on the scrolls to read about the projects! 
        </p>

        <Dialog.Portal>
          <Dialog.Overlay className={styles.quests__dialogOverlay} />
          <Dialog.Content className={styles.quests__dialogContent}>
            <div className={clsx(styles.quests__scrollBorder, styles.quests__topScroll)} />

            <Dialog.Title className={styles.quests__dialogTitle}>
              {selectedQuest}
            </Dialog.Title>
            <Dialog.Description className={styles.quests__dialogDescription}>
              {QUESTS_MAP[selectedQuest as QUESTS]}
            </Dialog.Description>

            <Dialog.Close asChild>
              <button
                className={styles.scrollDialog__closeScroll}
                onClick={() => setSelectedQuest(undefined)}
              >
                close scroll
              </button>
            </Dialog.Close>

            <div className={clsx(styles.quests__scrollBorder, styles.quests__bottomScroll)} />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
