import mdxRemoteRenderToString from 'next-mdx-remote/render-to-string';
import mdxRemoteHydrate from 'next-mdx-remote/hydrate';

import { mdxComponents } from '@components/MdxComponents';

export function hydrate(source: RenderToStringReturnType) {
  return mdxRemoteHydrate(source, { components: mdxComponents });
}

export function renderToString(content: string) {
  return mdxRemoteRenderToString(content, {
    components: mdxComponents,
  });
}
