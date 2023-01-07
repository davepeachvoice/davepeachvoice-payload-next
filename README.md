## Setup

If you're using vscode, install the workspace's recommended vscode extensions.

```sh
# setup environment variables
mv .env.example .env

# install packages
yarn install

# start dev server
npm run dev

# graphql codegen based on served schema
yarn run generate:gql:code
```

## Run production build

```sh
yarn run build && yarn run start
```

## Notes

Have a couple of patches applied -

1. Mongoose keeps complaining about Overwrite errors on module reloads. Applied a fix mentioned [here](https://stackoverflow.com/questions/62440264/mongoose-nextjs-model-is-not-defined-cannot-overwrite-model-once-compiled) on globals and collections.
2. For some reason Vercel can't find local file config module, so I had to import it statically.

The admin UI is served from `public/` in production and from express webpack in dev. From my limited testing all API's seem to work including GraphQL.

Other caveats -

1. Adding a new collection, needs a manual service restart.
