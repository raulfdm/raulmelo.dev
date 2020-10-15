import { useContext } from 'react';
import { IntlShape, useIntl } from 'react-intl';

import { CustomIntlShape, LocalizationContext } from '@contexts/react-intl';

export const useLocalization = (): IntlShape & CustomIntlShape => {
  const intl = useIntl();
  const customIntl = useContext(LocalizationContext) as CustomIntlShape;

  if (!customIntl) {
    throw new Error(
      'useLocalization needs to be used under "LocalizationContext"',
    );
  }

  return { ...intl, ...customIntl };
};
