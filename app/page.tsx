import HomeHero from '../components/HomeHero';
import Players from '../components/Media/Players';
import { comparePriorities } from '../lib/compare-priorities';
import { getHomePortfolioItems } from '../lib/payload-gql-client';

export default async function Index() {
  const portfolioItems = await getHomePortfolioItems();
  const sortedPortfolioItems = [...portfolioItems.PortfolioItems.docs].sort(
    comparePriorities
  );
  const sortedTransformedPortfolioItems = sortedPortfolioItems.map((item) => ({
    ...item,
    category: item.category.title,
  }));

  return (
    <>
      <HomeHero />
      <Players portfolioItems={sortedTransformedPortfolioItems} />
    </>
  );
}
