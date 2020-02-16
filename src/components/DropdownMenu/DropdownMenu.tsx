import React from 'react';
import styled from 'styled-components';
import { ClickOutside } from '../ClickOutside';

const Wrapper = styled.div`
  color: ${(props) => props.theme.color.font};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledDropdownMenu = styled.div`
  position: relative;
`;

const List = styled.ul`
  background-color: ${(props) => props.theme.color.background};
  border-radius: 3px;
  box-shadow: ${(props) => props.theme.color.shadowLight} 0 1px 2px,
    ${(props) => props.theme.color.shadow} 0 0 1px;
  max-width: 280px;

  margin: 0;
  padding: 0;
  position: absolute;
  top: 20px;
  right: 0;

  display: flex;
  flex-direction: column;
`;

const ArrowUp = styled.div`
  clip: rect(0, 18px, 14px, -4px);
  left: 50%;

  margin-left: -7px;
  position: absolute;
  bottom: -8px;

  &::after {
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    background: ${(props) => props.theme.color.background};
    box-shadow: -1px -1px 1px -1px ${(props) => props.theme.color.shadow};
    transform: rotate(45deg) translate(6px, 6px);
  }
`;

type ToggleDropdown = () => void;

type RenderPropsChildren = (args: {
  isVisible: boolean;
  toggleDropdown: ToggleDropdown;
}) => React.ReactNode;

type Props = {
  items: React.ReactNode;
  children: RenderPropsChildren;
};

export const DropdownMenu = ({ items, children }: Props) => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <Wrapper>
      <ClickOutside handleClickOutside={() => setIsVisible(false)}>
        {children({
          isVisible,
          toggleDropdown: () => setIsVisible(!isVisible),
        })}
      </ClickOutside>

      {isVisible && (
        <>
          <StyledDropdownMenu>
            <List>{items}</List>
          </StyledDropdownMenu>
          <ArrowUp />
        </>
      )}
    </Wrapper>
  );
};
