import { FC } from 'react';

import { Container } from '@components/Ui';
import { styled, media } from '@styles/styled';
import { SiteTheme } from '@types-app';

const Main = styled(Container)`
  && {
    padding-top: ${({ theme }) => `calc(35px + ${theme.sizes.menuBar.height})`};

    ${media.greaterThan('medium')`
      padding-top: ${({ theme }: { theme: SiteTheme }) =>
        `calc(35px + ${theme.sizes.menuBar.height})`};
    `}
  }
`;

// TODO: couldn't find something better for any
export const CommonLayout: FC<{ as: any }> = ({ children, ...props }) => {
  return <Main {...props}>{children}</Main>;
};
