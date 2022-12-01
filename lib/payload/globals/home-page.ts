import { GlobalConfig } from 'payload/types';

export const Home: GlobalConfig = {
  slug: 'homePage',
  label: 'Home Page',
  admin: { group: 'Pages' },
  access: { read: () => true },
  fields: [
    {
      name: 'heroMainText',
      label: 'Hero Main Text',
      type: 'text',
      required: false,
    },
    {
      name: 'heroSubText',
      label: 'Hero Sub Text',
      type: 'text',
      required: false,
    },
    {
      name: 'audioSampleText',
      label: 'Audio Sample Text',
      type: 'text',
      required: false,
    },
    {
      name: 'mainBody',
      label: 'Main Body',
      type: 'textarea',
      required: false,
    },
  ],
};
