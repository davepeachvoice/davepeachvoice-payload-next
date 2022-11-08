import path from "path";
import cloudinaryPlugin from "payload-cloudinary-plugin/dist/plugins";
import { buildConfig } from "payload/config";
import { Media } from "./collections/media";
import PortfolioCategories from "./collections/portfolio-category";
import PortfolioItems from "./collections/portfolio-item";
import Users from "./collections/users";
import { Settings } from "./globals/Settings";

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, PortfolioItems, PortfolioCategories, Media],
  globals: [Settings],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [cloudinaryPlugin()],
});
