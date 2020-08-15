import { useContext } from 'react';

import { BlogContext } from '@screens/Blog/context';

export const useBlogContext = () => {
  const context = useContext(BlogContext);

  if (!context) {
    throw new Error('useBlogContext needs to be used with BlogContextProvider');
  }

  return context;
};
