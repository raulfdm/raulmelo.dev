import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { ThemeProvider } from '@contexts/theme';
import { blogGlobalStyles } from '@styles/blogPost';
import { blogComponents } from '@screens/Blog/components/MdxComponents';
import { GlobalStyles } from '@styles/index';

export const BlogTheme: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles global={blogGlobalStyles} />
      <ThemeProvider>
        <MDXProvider components={blogComponents}>{children}</MDXProvider>
      </ThemeProvider>
    </>
  );
};
