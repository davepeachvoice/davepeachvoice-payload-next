'use client';

import { useCallback, useEffect, useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import ReactPlayer from 'react-player';
import { PortfolioItemDataInterface } from '../PortfolioItems/PortfolioItemInterface';

interface Props {
  portfolioItem: PortfolioItemDataInterface;
  setPortfolioItem: (item: PortfolioItemDataInterface | undefined) => unknown;
}

export default function VideoModal(props: Props) {
  const [currentVideoSource, setCurrentVideoSource] = useState<string>();
  const [show, setShow] = useState(false);

  const openModal = useCallback(() => {
    setShow(true);
  }, []);

  const closeModal = useCallback(() => {
    props.setPortfolioItem(undefined);
    setShow(false);
  }, [props]);

  useEffect(() => {
    const videoPortfolioItemIsPresent =
      props.portfolioItem && props.portfolioItem.media_type === 'video';

    if (!videoPortfolioItemIsPresent) {
      closeModal();
      return;
    }

    setCurrentVideoSource(props.portfolioItem.media_source);

    openModal();
  }, [props.portfolioItem, openModal, closeModal]);

  return (
    <div>
      {show && (
        <div
          // onEsc={closeModal}
          // onClickOutside={closeModal}
          // full
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <div style={{ top: 0, right: 0, position: 'absolute' }}>
            <GrFormClose size="3em" onClick={closeModal} />
          </div>

          <div className="m-6 h-48 w-96">
            <ReactPlayer
              url={currentVideoSource}
              playing={true}
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
    </div>
  );
}
