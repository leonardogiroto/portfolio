import clsx from "clsx";
import styles from './Quests.module.css';
import * as Dialog from "@radix-ui/react-dialog";
import { PortfolioQuest } from "./projects/PortfolioQuest";
import { useState } from "react";

enum QUESTS {
  PORTFOLIO,
};

const QUESTS_MAP = {
  [QUESTS.PORTFOLIO]: <PortfolioQuest />,
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
        <img src="assets/icons/scroll.png" className="icon" alt="" />
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
            <QuestScroll title="Portfolio" onClick={() => setSelectedQuest(QUESTS.PORTFOLIO)} />
          </li>
          <li>
            <QuestScroll title="Portfolio" onClick={() => setSelectedQuest(QUESTS.PORTFOLIO)} />
          </li>
          <li>
            <QuestScroll title="Portfolio" onClick={() => setSelectedQuest(QUESTS.PORTFOLIO)} />
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
              Portfolio
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
