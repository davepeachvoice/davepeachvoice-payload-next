import path from 'path';
import cloudinaryPlugin from 'payload-cloudinary-plugin/dist/plugins';
import { buildConfig } from 'payload/config';
import { Media } from './collections/media';
import { PortfolioCategory } from './collections/portfolio-category';
import { PortfolioItem } from './collections/portfolio-item';
import { Service } from './collections/service';
import { User } from './collections/user';
import { Home } from './globals/home-page';
import { ServicesPage } from './globals/services-page';

export default buildConfig({
  admin: { user: User.slug },
  collections: [User, PortfolioItem, PortfolioCategory, Media, Service],
  globals: [Home, ServicesPage],
  typescript: { outputFile: path.resolve(__dirname, 'payload-types.ts') },
  graphQL: {
    schemaOutputFile: path.resolve(
      __dirname,
      '../../graphql/payload/schema.graphql'
    ),
  },
  plugins: [cloudinaryPlugin() as any],
});
