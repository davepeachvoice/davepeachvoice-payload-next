'use client';

import { FC, useState } from 'react';
import * as UnlockMediaElement from '../../lib/unlock-media-element';
import HomeExperience from '../HomeExperience';
import HomePortfolio from '../HomePortfolio';
import HomeAudio from '../pages/Home/HomeAudio/HomeAudio';
import { PortfolioItemDataInterface } from '../PortfolioItems/PortfolioItemInterface';
import VideoModal from './VideoModal';

export interface Props {
  portfolioItems: PortfolioItemDataInterface[];
}

const Players: FC<Props> = (props) => {
  const [playingPortfolioItem, setPlayingPortfolioItem] =
    useState<PortfolioItemDataInterface>();
  const [mediaElement, setMediaElement] = useState<HTMLAudioElement>();

  function handleFirstUserInteraction() {
    // did we already handle the first user interaction?
    if (mediaElement) {
      return;
    }

    setMediaElement(UnlockMediaElement.constructUnlockedMediaElement());
  }

  return (
    <>
      <div
        onTouchStart={handleFirstUserInteraction}
        onClick={handleFirstUserInteraction}
      >
        <HomeAudio></HomeAudio>
        <HomeExperience></HomeExperience>
        <HomePortfolio
          setPlayingPortfolioItem={setPlayingPortfolioItem}
          portfolioItems={props.portfolioItems}
        ></HomePortfolio>
        {/* <AudioWaveform
          portfolioItem={playingPortfolioItem}
          mediaElement={mediaElement}
        ></AudioWaveform> */}
        {playingPortfolioItem && (
          <VideoModal
            portfolioItem={playingPortfolioItem}
            setPortfolioItem={setPlayingPortfolioItem}
          />
        )}
      </div>
    </>
  );
};

export default Players;
