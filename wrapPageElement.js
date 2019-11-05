import React from 'react';
import { PageRoot } from './src/components/PageRoot';

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => {
  return <PageRoot {...props}>{element}</PageRoot>;
};

export default wrapPageElement;
