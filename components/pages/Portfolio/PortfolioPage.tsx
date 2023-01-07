'use client';

// import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import * as UnlockMediaElement from '../../../lib/unlock-media-element';
import VideoModal from '../../Media/VideoModal';
import Portfolio from '../../Portfolio';
import {
  PortfolioCategory,
  PortfolioItemDataInterface,
} from '../../PortfolioItems/PortfolioItemInterface';

// const AudioWaveform = dynamic(() => import('../../Media/AudioWaveform'), {
//   suspense: true,
//   ssr: false,
// });

export interface Props {
  portfolioData: [string, Pick<PortfolioCategory, 'priority' | 'items'>][];
}

const PortfolioPage: FC<Props> = (props) => {
  const [playingPortfolioItem, setPlayingPortfolioItem] =
    React.useState<PortfolioItemDataInterface>();
  const [mediaElement, setMediaElement] = React.useState<HTMLAudioElement>();

  function handleFirstUserInteraction() {
    // did we already handle the first user interaction?
    if (mediaElement) {
      return;
    }

    setMediaElement(UnlockMediaElement.constructUnlockedMediaElement());
  }

  return (
    <div
      onTouchStart={handleFirstUserInteraction}
      onClick={handleFirstUserInteraction}
      className="px-8"
    >
      <div className="h-4" />
      <Portfolio
        portfolioData={props.portfolioData}
        setPlayingPortfolioItem={setPlayingPortfolioItem}
      ></Portfolio>
      {/* <Suspense>
        <AudioWaveform
          portfolioItem={playingPortfolioItem}
          mediaElement={mediaElement}
        ></AudioWaveform>
      </Suspense> */}
      {playingPortfolioItem && (
        <VideoModal
          portfolioItem={playingPortfolioItem}
          setPortfolioItem={setPlayingPortfolioItem}
        />
      )}
    </div>
  );
};

export default PortfolioPage;
