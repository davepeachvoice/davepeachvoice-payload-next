import React, { FC } from 'react';
import Card from './Card';
import { PortfolioItemInterface } from './PortfolioItemInterface';

export interface Props {
  items: PortfolioItemInterface[];
  setPlayingPortfolioItem: React.Dispatch<
    React.SetStateAction<PortfolioItemInterface>
  >;
}

const PortfolioItems: FC<Props> = ({ items, setPlayingPortfolioItem }) => {
  return (
    <div className="grid grid-flow-col grid-cols-3 gap-4">
      {items.map((item) => (
        <Card
          key={item.title}
          item={item}
          onClick={() => setPlayingPortfolioItem(item)}
        ></Card>
      ))}
    </div>
  );
};

export default PortfolioItems;
