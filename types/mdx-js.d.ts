declare module '@mdx-js/react' {
  import { ComponentType, StyleHTMLAttributes } from 'react';

  type MDXProps = {
    children: React.ReactNode;
    components: { [componentName: string]: React.ReactNode };
  };
  export class MDXProvider extends React.Component<MDXProps> {}
}
