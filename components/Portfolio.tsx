import PortfolioSection from './pages/Portfolio/Section';
import {
  PortfolioCategory,
  PortfolioItemDataInterface,
} from './PortfolioItems/PortfolioItemInterface';

interface Props {
  setPlayingPortfolioItem: (item: PortfolioItemDataInterface) => unknown;
  portfolioData: [string, Pick<PortfolioCategory, 'priority' | 'items'>][];
}

export default function Portfolio(props: Props) {
  return (
    <div>
      {props.portfolioData.map((portfolioCategory) => (
        <PortfolioSection
          key={portfolioCategory[0]}
          name={portfolioCategory[0]}
          items={portfolioCategory[1].items}
          setPlayingPortfolioItem={props.setPlayingPortfolioItem}
        ></PortfolioSection>
      ))}
    </div>
  );
}
