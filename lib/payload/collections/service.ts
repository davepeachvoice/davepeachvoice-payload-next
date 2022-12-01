import { CollectionConfig } from 'payload/types';

export const Service: CollectionConfig = {
  slug: 'service',
  labels: { singular: 'Service', plural: 'Services' },
  access: { read: () => true },
  admin: { useAsTitle: 'title' },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'priority',
      label: 'Priority',
      type: 'number',
      required: true,
    },
  ],
};
