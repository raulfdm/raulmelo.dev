import React from 'react';

import { BlogPostContext } from './types';

const BlogContext = React.createContext<BlogPostContext | undefined>(undefined);

export const BlogContextProvider = BlogContext.Provider;

export const useBlogContext = () => {
  const values = React.useContext(BlogContext);

  if (!values) {
    throw new Error('useBlogContext needs to be used with BlogContextProvider');
  }

  return values;
};
