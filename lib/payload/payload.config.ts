import path from "path";
import { buildConfig } from "payload/config";
import PortfolioCategories from "./collections/portfolio-categories";
import PortfolioItems from "./collections/portfolio-items";
import Users from "./collections/users";
import { Settings } from "./globals/Settings";

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, PortfolioItems, PortfolioCategories],
  globals: [Settings],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
