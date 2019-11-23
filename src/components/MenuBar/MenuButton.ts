import styled from 'styled-components';

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  outline: ${({ theme }) => theme.color.background};
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.color.font};
  }
`;
