import React from 'react';
import { equals } from 'ramda';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const deepMemo = <T>(component: React.SFC<T>) =>
  React.memo(component, equals);
