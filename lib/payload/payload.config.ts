import path from 'path';
import cloudinaryPlugin from 'payload-cloudinary-plugin/dist/plugins';
import { buildConfig } from 'payload/config';
import { Media } from './collections/media';
import { PortfolioCategory } from './collections/portfolio-category';
import { PortfolioItem } from './collections/portfolio-item';
import { User } from './collections/user';
import { Settings } from './globals/Settings';

export default buildConfig({
  admin: {
    user: User.slug,
  },
  collections: [User, PortfolioItem, PortfolioCategory, Media],
  globals: [Settings],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [cloudinaryPlugin()],
});
