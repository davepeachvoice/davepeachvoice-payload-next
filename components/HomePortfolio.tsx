import { PortfolioItemDataInterface } from './PortfolioItems/PortfolioItemInterface';
import PortfolioItems from './PortfolioItems/PortfolioItems';

interface Props {
  setPlayingPortfolioItem: (item: PortfolioItemDataInterface) => unknown;
  portfolioItems: PortfolioItemDataInterface[];
}

export default function HomePortfolio(props: Props) {
  return (
    <div>
      <PortfolioItems
        items={props.portfolioItems}
        setPlayingPortfolioItem={props.setPlayingPortfolioItem}
      ></PortfolioItems>
    </div>
  );
}
