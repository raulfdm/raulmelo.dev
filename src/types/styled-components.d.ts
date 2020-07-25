// import original module declarations
import 'styled-components';
import { SiteTheme } from '@styles/styled';
import { CvTheme } from '@components/CV/styles';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends SiteTheme {}
}
