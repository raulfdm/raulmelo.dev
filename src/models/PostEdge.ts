import { types } from 'mobx-state-tree';

const Fields = types.model({
  lang: types.string,
  postFolderName: types.string,
  slug: types.string,
});

const Fluid = types.model({
  aspectRatio: types.number,
  base64: types.string,
  originalImg: types.string,
  presentationHeight: types.number,
  presentationWidth: types.number,
  sizes: types.string,
  src: types.string,
  srcSet: types.string,
  srcSetWebp: types.string,
  srcWebp: types.string,
  tracedSVG: types.string,
});

const ChildImageSharp = types.model({ fluid: Fluid });

const Image = types.model({ childImageSharp: ChildImageSharp });

const Series = types.model({
  id: types.maybeNull(types.string),
  copy: types.maybeNull(types.string),
  index: types.maybeNull(types.number),
});

const Frontmatter = types.model({
  date: types.maybeNull(types.string),
  description: types.maybeNull(types.string),
  image: types.maybeNull(Image),
  series: types.maybeNull(Series),
  subtitle: types.maybeNull(types.string),
  tags: types.maybeNull(types.array(types.string)),
  title: types.maybeNull(types.string),
});

const PostNode = types.model({
  fields: types.maybeNull(Fields),
  fileAbsolutePath: types.maybeNull(types.string),
  frontmatter: types.maybeNull(Frontmatter),
  id: types.maybeNull(types.string),
  timeToRead: types.maybeNull(types.number),
});

export const PostEdge = types.model({ node: PostNode });
