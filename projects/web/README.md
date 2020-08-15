# Website

> ![Web](https://github.com/raulfdm/raulmelo.dev/workflows/Web/badge.svg)

## Stack

- [Gatsby started default](https://github.com/gatsbyjs/gatsby-starter-default);
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/) for styles;
- [Styled Icons](https://styled-icons.js.org/) - collection of svg icons as React components;
- [React Inlt](https://github.com/formatjs/react-intl) for locales;
- [Framer Motion](https://www.framer.com/api/motion/) for smooth animations;
- [Mobx State Tree](https://mobx-state-tree.js.org/intro/philosophy) as easy state management;
- [Algolia](https://www.algolia.com/) for search

For hosting I use Netlify services. Since they have limit amount of machine usage, I build using Github Actions and only ship the files via Netlici CLI.

## Language

This blog is mainly in Brazilian Portuguese (my mother language) just because when I started to write I didn't know english and I was engaged to the brazilian dev community.

However the interface is translated and there are blog posts in both English and Portuguese language.

## Blog post structure

For new blog posts, a folder with the following structure should be created inside `blog` folder:

```txt
blog/<post-short-title>/index.mdx
```

For an English translation, in the post folder, just add a file `index.en.mdx`
