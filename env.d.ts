declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GATSBY_ALGOLIA_APP_ID: string;
      ALGOLIA_ADMIN_KEY: string;
      GATSBY_ALGOLIA_SEARCH_KEY: string;
      GATSBY_ALGOLIA_INDEX_NAME: string;
    }
  }
}
