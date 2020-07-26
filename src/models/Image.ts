import { types } from 'mobx-state-tree';

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

export const Image = types.model({ childImageSharp: ChildImageSharp });
