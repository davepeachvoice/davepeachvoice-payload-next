import { CollectionConfig } from "payload/types";
import { Media } from "./media";
import { PortfolioCategory } from "./portfolio-category";

export const PortfolioItem: CollectionConfig = {
  slug: "portfolio-items",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
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
      name: "audio",
      label: "Audio",
      type: "relationship",
      relationTo: Media.slug,
      admin: {
        condition: (_data, siblingData) => siblingData.media_type === "audio",
      },
    },
    {
      name: "video_url",
      label: "Video URL",
      type: "text",
      admin: {
        description: "YouTube link to embed",
        condition: (_data, siblingData) => siblingData.media_type === "video",
      },
    },
    {
      name: "thumbnail",
      label: "Thumbnail",
      type: "relationship",
      relationTo: Media.slug,
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
