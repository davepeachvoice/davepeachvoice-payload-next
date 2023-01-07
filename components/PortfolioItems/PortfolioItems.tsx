import { FC } from 'react';
import Card from './Card';
import { PortfolioItemDataInterface } from './PortfolioItemInterface';

export interface Props {
  items: PortfolioItemDataInterface[];
  setPlayingPortfolioItem: (item: PortfolioItemDataInterface) => unknown;
}

const PortfolioItems: FC<Props> = ({ items, setPlayingPortfolioItem }) => {
  return (
    <div className="grid auto-cols-max grid-flow-col gap-8">
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
