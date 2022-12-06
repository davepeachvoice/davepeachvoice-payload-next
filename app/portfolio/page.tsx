import type { DeepPick } from 'ts-deep-pick';
import PortfolioPage from '../../components/pages/Portfolio/PortfolioPage';
import { PortfolioCategory } from '../../components/PortfolioItems/PortfolioItemInterface';
import { isTruthy } from '../../lib/is-truthy';
import { sdk } from '../../lib/payload-gql-client';

export default async function Page() {
  const portfolioItemsQuery = await sdk.getPortfolioItems();
  const portfolioItems = portfolioItemsQuery.PortfolioItems?.docs ?? [];
  const truthyPortfolioItems = portfolioItems.filter(isTruthy);

  const categories: Record<
    string,
    DeepPick<
      PortfolioCategory,
      | 'priority'
      | 'items.[].title'
      | 'items.[].media_type'
      | 'items.[].media_source'
      | 'items.[].thumbnail_source'
    >
  > = {};

  // group items by category
  for (const item of truthyPortfolioItems) {
    if (!item.category) continue;
    if (!categories[item.category.title]) {
      categories[item.category.title] = {
        priority: item.category.priority,
        items: [],
      };
    }
    categories[item.category.title].items.push(item);
  }

  // sort categories by priority
  const categoriesArray = Object.entries(categories);
  const sortedCategoriesArray = categoriesArray.sort((firstEl, secondEl) => {
    const firstElCategoryData = firstEl[1];
    const secondElCategoryData = secondEl[1];
    if (firstElCategoryData.priority < secondElCategoryData.priority) {
      return -1;
    } else if (firstElCategoryData.priority > secondElCategoryData.priority) {
      return 1;
    }
    return 0;
  });

  return <PortfolioPage portfolioData={sortedCategoriesArray} />;
}
