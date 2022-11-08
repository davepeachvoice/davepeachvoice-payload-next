import { CollectionConfig } from "payload/types";

const PortfolioCategories: CollectionConfig = {
  slug: "portfolio-categories",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "priority",
      type: "number",
      required: true,
    },
  ],
};

export default PortfolioCategories;
