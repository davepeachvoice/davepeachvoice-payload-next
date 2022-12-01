import HomeHero from '../components/HomeHero';
import Players from '../components/Media/Players';
import { comparePriorities } from '../lib/compare-priorities';
import { sdk } from '../lib/payload-gql-client';

export default async function Index() {
  const portfolioItems = await sdk.getHomePortfolioItems();
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
