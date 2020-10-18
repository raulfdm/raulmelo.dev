import { FC } from 'react';

import { CommonLayout } from '@components/CommonLayout';

export const UsesPage: FC = (props) => {
  return <CommonLayout as="main">{props.children}</CommonLayout>;
};
