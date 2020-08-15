# [raulmelo.dev](https://www.raulmelo.dev/)

> Medium asks you to pay to read my articles? No problem, just hold my beer.

<p align="center">
  <a href="https://github.com/raulfdm/raulmelo.dev/workflows/Server" title="Github Actions for server">
    <img src="https://github.com/raulfdm/raulmelo.dev/workflows/Server/badge.svg" alt="Build bagde">
  </a>
  <a href="https://github.com/raulfdm/raulmelo.dev/workflows/Web" title="Github Actions for web">
    <img src="https://github.com/raulfdm/raulmelo.dev/workflows/Web/badge.svg" alt="Build bagde">
  </a>
</p>

## Stack

This is a monorepo which holds my site in [Gatsby](https://www.gatsbyjs.com/) and a headless CMS (where I manage my site data) using [Strapi](strapi.io/).

For CI/CD, I use [Github Actions](https://github.com/features/actions) which deploys the server in [Heroku](https://www.heroku.com/n) and the website in [Netlify](https://www.netlify.com/).

For more in-depth details, check the README.md inside each project the used technologies.

## How to run

Since this project is using `Yarn Workspaces`, you do not have to go inside each project and install their deps.

You can do that in root level:

```
yarn install
```

### Server

I haven't customized many things from Strapi starter, only the database (which is sqlite by default) and host images in cloudinary instead local save.

1. Create a `.env` file based on the `.env.example` and fill it in with all required information.

   > Note: DATABASE_URI is a must. You can [follow Strapi guide](https://strapi.io/documentation/v3.x/guides/databases.html#mongodb-installation) to know how to get one

1. Run the server:

   ```
   yarn server:dev
   ```

The application will be available via `http://localhost:1337/admin` (for the manager) and `http://localhost:1337` for API access.

### Web

Before continue you do have to keep in mind that you won't be able to get the client running without the server just because it relies on in the data from there to build some pages and componentes.

So, get the **server running** first and then run:

```
yarn web:dev
```

### Both in the same time

If you want to run both with a single command, after having setup the `.env` files, just run:

```
yarn dev
```

This command uses [`concurrently`](https://www.npmjs.com/package/concurrently) package to run both projects and [`wait-on`](https://www.npmjs.com/package/wait-on) to run the website only after the server is available.

## License

[MIT](/LICENSE)
