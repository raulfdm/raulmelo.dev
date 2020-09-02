import React from 'react';
import { defineMessage } from 'react-intl';

import { useIntl } from '@contexts/react-intl';
import { useApp } from '@hooks/useApp';
import { isBrowserApiAvailable } from '@utils/utilities';
import { Nav, StyledLink, OpacityLayer } from './styles';

const messages = defineMessage({
  home: {
    id: 'sideMenu.home',
  },
  search: {
    id: 'sideMenu.search',
  },
  uses: {
    id: 'sideMenu.uses',
  },
  cv: {
    id: 'sideMenu.cv',
  },
});

const links = {
  home: {
    to: '/',
    localeId: messages.home,
  },
  search: {
    to: '/search',
    localeId: messages.search,
  },
  uses: {
    to: '/uses',
    localeId: messages.uses,
  },
  cv: {
    to: '/cv',
    localeId: messages.cv,
  },
};

export const SideMenu = () => {
  const { sideMenu } = useApp();
  const { isCollapsed, toggle, hide } = sideMenu;

  const animate = isCollapsed ? 'closed' : 'open';
  const { formatMessage } = useIntl();
  const urlPathname = isBrowserApiAvailable.window
    ? window.location.pathname
    : '';

  React.useEffect(() => {
    const hideOnScroll = (): void => {
      if (!isCollapsed) {
        hide();
      }
    };

    document.addEventListener('scroll', hideOnScroll);
    return () => {
      document.removeEventListener('scroll', hideOnScroll);
    };
  }, [isCollapsed, hide]);

  return (
    <>
      <Nav
        isCollapsed={isCollapsed}
        animate={animate}
        variants={{
          open: {
            transform: `translate3d(0%, 0, 0)`,
          },
          closed: {
            transform: `translate3d(100%, 0, 0)`,
          },
        }}
        data-testid="sideMenu"
      >
        {Object.entries(links).map(([linkId, config]) => {
          return (
            <StyledLink
              key={linkId}
              to={config.to}
              onClick={toggle}
              data-testid={`side-menu-${linkId}-link`}
              $isCurrentPage={urlPathname === config.to}
            >
              {formatMessage(config.localeId)}
            </StyledLink>
          );
        })}
      </Nav>
      <OpacityLayer
        style={{
          pointerEvents: isCollapsed ? 'none' : 'all',
        }}
        onClick={hide}
        animate={animate}
        variants={{
          open: {
            opacity: 1,
          },
          closed: {
            opacity: 0,
          },
        }}
      />
    </>
  );
};
