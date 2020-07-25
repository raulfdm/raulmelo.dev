import React from 'react';

import { BlogPostContext } from './types';

export const BlogContext = React.createContext<BlogPostContext | undefined>(
  undefined,
);

export const BlogContextProvider = BlogContext.Provider;
