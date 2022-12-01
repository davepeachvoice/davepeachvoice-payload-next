import { GlobalConfig } from 'payload/types';

export const ServicesPage: GlobalConfig = {
  slug: 'servicesPage',
  label: 'Services Page',
  access: { read: () => true },
  admin: { group: 'Pages' },
  fields: [
    {
      name: 'stepZeroHeader',
      label: 'Step 0 Header',
      type: 'text',
      required: true,
    },
    {
      name: 'stepOneHeader',
      label: 'Step 1 Header',
      type: 'text',
      required: true,
    },
    {
      name: 'attributionFieldPrompt',
      label: 'Attribution Field Prompt',
      type: 'text',
      required: true,
    },
    {
      name: 'attributionFieldOptions',
      label: 'Step 1 Header',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'option',
          label: 'Option',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'mainBody',
      label: 'Main Body',
      type: 'textarea',
      required: true,
    },
  ],
};
