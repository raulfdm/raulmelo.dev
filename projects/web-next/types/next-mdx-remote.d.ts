/**
 * They still have no .d.ts
 * Isn't perfect either ideal but It's good for now
 * https://github.com/hashicorp/next-mdx-remote/blob/master
 */
type RenderToStringReturnType = {
  compiledSource: any;
  renderedOutput: any;
};

declare module 'next-mdx-remote/render-to-string' {
  export default function renderToString(
    content: string,
    opts?: RenderToStringOpts,
  ): Promise<RenderToStringReturnType>;

  type RenderToStringOpts = {
    components: {
      [match: string]: React.ComponentType | StyledComponent;
    };
  };
}

declare module 'next-mdx-remote/hydrate' {
  export default function hydrate(
    content: RenderToStringReturnType,
    opts?: RenderToStringOpts,
  );
}
