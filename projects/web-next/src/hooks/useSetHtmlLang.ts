import { useEffect } from 'react';

import { SupportedLanguages } from '@app/types';

export function useSetHtmlLang(lang: SupportedLanguages = 'en') {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, []);
}
