import mdxRemoteRenderToString from 'next-mdx-remote/render-to-string';
import mdxRemoteHydrate from 'next-mdx-remote/hydrate';
import rehypeAutoLink from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

import { mdxComponents } from '@components/MdxComponents';

export function hydrate(source: RenderToStringReturnType) {
  return mdxRemoteHydrate(source, {
    components: mdxComponents,
  });
}

export function renderToString(content: string) {
  return mdxRemoteRenderToString(content, {
    components: mdxComponents,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutoLink,
          {
            properties: {
              className: 'copy-title-icon',
            },
            content: null,
          },
        ],
      ],
      compilers: [],
    },
  });
}
