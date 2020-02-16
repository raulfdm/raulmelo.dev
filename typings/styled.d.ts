// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      contentSans: string;
      contentSerif: string;
      contentSlab: string;
      contentTitle: string;
      marketingDisplay: string;
    };
    color: {
      background: string;
      font: string;
      fontMedium: string;
      fontLight: string;
      // border: string;
      shadow: string;
    };
  }
}
