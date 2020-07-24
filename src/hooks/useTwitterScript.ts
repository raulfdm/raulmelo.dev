/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from 'react';

/* This loads all widgets from twitter if exists. 
  It's loaded by html.tsx (data-testid="twitter-script")
*/
export const useTwitterScript = () => {
  useEffect(() => {
    // @ts-ignore
    if (window['twttr']?.widgets) {
      // @ts-ignore
      window['twttr'].widgets.load();
    }
  }, []);
};
