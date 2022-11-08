import { CollectionConfig } from "payload/types";
import PortfolioCategory from "./portfolio-categories";

const PortfolioItems: CollectionConfig = {
  slug: "portfolio-items",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "someField",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "media_type",
      label: "Media Type",
      type: "select",
      required: true,
      options: [
        {
          label: "Video",
          value: "video",
        },
        {
          label: "Audio",
          value: "audio",
        },
      ],
    },
    {
      name: "media",
      label: "Media",
      type: "text",
      required: true,
    },
    {
      name: "thumbnail",
      label: "Thumbnail",
      type: "text",
      required: true,
    },
    {
      name: "homepage_visible",
      label: "Visible on Homepage",
      type: "checkbox",
    },
    {
      name: "category",
      label: "Category",
      type: "relationship",
      relationTo: PortfolioCategory.slug,
    },
  ],
};

export default PortfolioItems;
