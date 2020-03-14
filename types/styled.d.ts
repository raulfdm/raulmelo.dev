// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    isDarkTheme: boolean;
    font: {
      contentSans: string;
      contentSerif: string;
      contentTitle: string;
    };
    color: {
      background: string;
      font: string;
      fontMedium: string;
      fontLight: string;
      border: string;
      shadow: string;
      shadowLight: string;
      shadowBright: string;
      shadowMenu: string;
    };
  }
}
