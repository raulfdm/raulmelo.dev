import React from 'react';
import styled from 'styled-components';

import { Container } from '../ui';
import InputSearch from '../InputSearch';
import LogoSvg from '../LogoSvg';

const MenuBarWrapper = styled.nav`
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6.5rem;
  z-index: 500;
  background-color: #fff;
`;

const CustomContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
`;

const MenuBar = () => {
  return (
    <MenuBarWrapper>
      <CustomContainer>
        <div class="u-xs-hide js-metabarLogoLeft">
          <a href="https://medium.com/" data-log-event="home">
            <span class="svgIcon svgIcon--logoWordmark svgIcon--122x45px u-xs-show u-flex">
              <LogoSvg />
            </span>
            {/* <span class="u-textScreenReader">Homepage</span> */}
          </a>
        </div>
        <InputSearch />
      </CustomContainer>
    </MenuBarWrapper>
  );
};

export default MenuBar;
