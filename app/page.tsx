import HomeHero from '../components/HomeHero';
import Players from '../components/Media/Players';
import { isTruthy } from '../lib/is-truthy';
import { sdk } from '../lib/payload-gql-client';

export default async function Index() {
  const portfolioItemsQuery = await sdk.getHomePortfolioItems();
  const portfolioItems =
    portfolioItemsQuery.PortfolioItems?.docs?.filter(isTruthy);

  if (!portfolioItems) return null;
  const truthyPortfolioItems = portfolioItems.filter(isTruthy);

  return (
    <>
      <HomeHero />
      <Players portfolioItems={truthyPortfolioItems} />
    </>
  );
}
